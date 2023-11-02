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
    marcos: marcosGuess.value,
    christian: christianGuess.value,
    evan: evanGuess.value,
    jaden: jadenGuess.value
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
  })

}

function renderState(){
  document.getElementById('results').innerHTML += `
    <p></p>
  `
  document.getElementById('results').innerHTML += '';
}

onReady()