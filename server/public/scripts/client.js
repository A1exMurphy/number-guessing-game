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
  })
 
}

//catalogue our server results as a variable



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