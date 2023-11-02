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
  res.sendStatus(201);
})

// function compareNumbers(guesses) {
//   if (guesses.marcos === currentNumber) {

//   }
//   if (guesses.christian === currentNumber) {

//   }
//   if (guesses.evan === currentNumber) {

//   }
//   if (guesses.jaden === currentNumber) {

//   }
// }
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  console.log('Current number is', currentNumber);
})
