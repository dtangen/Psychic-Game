//Declaring variables
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var winTotal = 0;
var lossTotal = 0;
var guessesLeft = 9;
var previousGuesses = [];
var userGuess;

//Have the computer get a random letter from the alphabet array

var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

//The user enters a guess

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if  (guessesLeft > 1) {
		if (userGuess === computerGuess) {
			winTotal++;
			previousGuesses = [];
			guessesLeft = 9;
			computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
		} else if (userGuess != computerGuess) {
			guessesLeft--;
			previousGuesses.push(userGuess);
		}
	} 
	else {
		lossTotal++;
		guessesLeft = 9;
		previousGuesses = [];
		computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
	}
//Display the running totals of wins and losses, plus guesses left and the previous guesses
var html = "<h1>The Psychic Game</h1>" +
	"<p>Guess what letter I am thinking of</p>" +
	"<p>Wins: " + winTotal + "</p>" +
	"<p>Losses: " + lossTotal + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your guesses so far: " + previousGuesses + "</p>";

document.querySelector("#psychicgame").innerHTML = html;

};

	