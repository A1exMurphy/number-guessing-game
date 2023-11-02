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
  // res.sendStatus(201);
  let results = checkRound(guesses);
  console.log(results);

  res.send(results);
})

function compareNumbers(playerNumber) {
  // Check if inputs are too high, low, or equal to number
  if (playerNumber === currentNumber) {
    return 'is correct';
  } else if (playerNumber > currentNumber) {
    return 'is too high';
  } else if (playerNumber < currentNumber) {
    return 'is too low';
  }
}

console.log(compareNumbers(1));
function checkRound(guesses) {
  let result = {marcos:compareNumbers(Number(guesses.marcos)),
    christian:compareNumbers(Number(guesses.christian)),
    evan:compareNumbers(Number(guesses.evan)),
    jaden:compareNumbers(Number(guesses.jaden))};
  return result;
}

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  console.log('Current number is', currentNumber);
})
