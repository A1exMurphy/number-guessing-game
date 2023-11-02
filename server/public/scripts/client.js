function onReady() {
  console.log("JavaScript is loaded!")
}
  /*Handles the submission from the form*/

function handleSubmit(event) {
  event.preventDefault();
  /*Stores the values of the inputs in variables*/
  let marcosGuess = document.getElementById('guess-marcos').value;
  let christianGuess = document.getElementById('guess-christian').value;
  let evanGuess = document.getElementById('guess-evan').value;
  let jadenGuess = document.getElementById('guess-jaden').value;


  console.log(marcosGuess, christianGuess, evanGuess, jadenGuess);

  /*Creating an object with the variables we created
    to hold the guess values to send to the server*/
  let totalGuesses = { 
    marcos: marcosGuess,
    christian: christianGuess,
    evan: evanGuess,
    jaden: jadenGuess
  }

  console.log(totalGuesses);

}

function renderState(){
  document.getElementById('results').innerHTML += `
    <p></p>
  `
  document.getElementById('results').innerHTML += '';
}

onReady()