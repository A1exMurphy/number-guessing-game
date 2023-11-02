const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/guesses', (req, res) => {
  console.log("POST / stuff");

})

function generateRandomNum(max) {
  return Math.floor(Math.random() * max);
}

console.log(generateRandomNum(25));
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
