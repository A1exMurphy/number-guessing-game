const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

function generateRandomNum(max) {
  return Math.floor(Math.random() * max);
}

let currentNumber = generateRandomNum(25);
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/guesses', (req, res) => {
  console.log("POST / stuff");
  console.log(req.body);
  let guesses = req.body;
  res.sendStatus(201);
})

function compareNumbers(playerNumber) {
  // Check if inputs are too high, low, or equal to number
  if (playerNumber == currentNumber) {
    return 'is correct';
  } else if (playerNumber > currentNumber) {
    return 'is too high';
  } else if (playerNumber < currentNumber) {
    return 'is too low';
  }
}

console.log(compareNumbers(1));
// function checkRound(guesses) {
//   if (guesses.marcos === currentNumber) {
//     console.log(`Congrats Marcos! You got it!`)
//   }
//   if (guesses.christian === currentNumber) {
//     console.log(`Congrats Christian! You got it!`)

//   }
//   if (guesses.evan === currentNumber) {
//     console.log(`Congrats Evan! You got it!`)

//   }
//   if (guesses.jaden === currentNumber) {
//     console.log(`Congrats Jaden! You got it!`)
//   }
//   return true;
// }

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  console.log('Current number is', currentNumber);
})
