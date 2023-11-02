function onReady() {
  console.log("JavaScript is loaded!")
}
  /*Handles the submission from the form*/

function handleSubmit(event) {
  event.preventDefault();
  /*Stores the values of the inputs in variables*/
  let marcosGuess = document.getElementById('guess-marcos');
  let christianGuess = document.getElementById('guess-christian');
  let evanGuess = document.getElementById('guess-evan');
  let jadenGuess = document.getElementById('guess-jaden');

  console.log(marcosGuess, christianGuess, evanGuess, jadenGuess);

  /*Creating an object with the variables we created
    to hold the guess values to send to the server*/
  let totalGuesses = { 
    marcos: Number(marcosGuess.value),
    christian: Number(christianGuess.value),
    evan: Number(evanGuess.value),
    jaden: Number(jadenGuess.value)
  }
  marcosGuess.value = '';
  christianGuess.value = '';
  evanGuess.value = '';
  jadenGuess.value = '';

  console.log(totalGuesses);

  axios({
    method: 'POST',
    url: '/guesses',
    data: totalGuesses
  }).then((response) => {
    console.log('TO-DO');
    console.log(response.data)
    let roundResult = response.data
    renderRoundResult(roundResult)
    if(roundResult.marcos === "is correct") {
      renderWinner('MARCOS')
    } else if (roundResult.christian === "is correct") {
      renderWinner('CHRISTIAN')
    } else if (roundResult.evan === "is correct") {
      renderWinner('EVAN')
    } else if (roundResult.jaden === "is correct") {
      renderWinner('JADEN')
    }
    updateRounds();
  })
 
}

function updateRounds() {
  axios({
    method: 'GET',
    url: '/rounds',
  }).then((response) => {
    console.log(response.data);
    let rounds = response.data.rounds;
    document.getElementById('rounds').innerHTML = rounds;
  })

}
//catalogue our server results as a variable

function roundReset() {
  axios({
    method: 'POST',
    url: '/reset',
  }).then((response) => {
    console.log(response.status);
    document.getElementById('results').innerHTML =""
    document.getElementById('winner').innerHTML = ""
    document.getElementById('rounds').innerHTML = "0"
  })
}


function renderWinner(name) {
  document.getElementById('winner').innerHTML = 
  `
    <h2>${name} IS THE WINNER!!</h2>
  `
  }


function renderRoundResult(results){
  document.getElementById('results').innerHTML += `
    <p>Marcos ${results.marcos}</p>
    <p>Christian ${results.christian}</p>
    <p>Evan ${results.evan}</p>
    <p>Jaden ${results.jaden}</p>
  `
  console.log(results);
  document.getElementById('results').innerHTML += '';
}

onReady()