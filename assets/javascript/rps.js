// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

var score = 0;
var pcScore = 0;
var ties = 0;

alert("Start Playing !");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess).
  alert("User guess: " + userGuess);

  // Alerts the Computer's guess.
  alert("Computer guess: " + computerGuess);

  if (userGuess === computerGuess) {

      alert("You are tie !");
      ties++;
      document.getElementById("ties").innerHTML = "Ties :"+ ties;
  }

  else if (( (userGuess === "r") && (computerGuess ==="s") ) || ( (userGuess === "s") && (computerGuess ==="p") ) || ( (userGuess === "p") && (computerGuess ==="r") ))
  
   {

     alert("You win !");
     score++;
     document.getElementById("score").innerHTML = "Your score :"+ score;

  }

  else {
    alert("You lose");
    pcScore++;
    document.getElementById("pcscore").innerHTML = "PC score :"+ pcScore;
  }


};