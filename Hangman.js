/*
 * H A N G M A N
 * Collaborative Development Edition
 */ 

var wins = 0;
var losses = 0;

var easy = { 
  wordbank: ["cat","dog","fish","hat","ant"],
  numGuesses: 15,
  activeWord: "",
  wrongGuesses: []
};

var medium = { 
  wordbank: ["tailer","donkey","charley"],
  numGuesses: 12,
  activeWord: "",
  wrongGuesses: []
};

var hard = { 
  wordbank: ["abruptly","bagpipes","bandwagon"],
  numGuesses: 8,
  activeWord: "",
  wrongGuesses: []
};

var display = {
    correct: [],
    wrong: [],
    update: function() {
      // Update guesses left
      $("#guessesLeft").text(numGuesses);
      // Update wrong guesses
      $("#wrongGuesses").text(wrongGuesses);
      // Update 
    }
};
  
var logic = {
  gameOver: {
    win: function() {
      this.reset();
      wins++;
    },
    lose: function() {
      this.reset();
      losses++;
    },
    reset: function() {

    }
  }
};
