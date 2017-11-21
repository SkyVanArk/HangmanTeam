/*
 * H A N G M A N
 * Collaborative Development Edition
 */ 

var wins = 0;
var losses = 0;

var easy = { 
  wordbank: [],
  numGuesses: 15,
  activeWord: "",
  wrongGuesses: [],
  display: {
    correct: [],
    wrong: [],
    update: function() {
      // Update guesses left
      $("#guessesLeft").text(numGuesses);
      // Update wrong guesses
      $("#wrongGuesses").text(wrongGuesses);
      // Update 
    }
  },
  logic: {

  },
  gameOver: {
    win: function() {

    },
    lose: function() {

    }
  }
};

