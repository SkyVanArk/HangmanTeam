/*
 * H A N G M A N
 * Collaborative Development Edition
 */ 

var wins = 0;
var losses = 0;
var difficulty;

$("#easyGame").click(function() {
  difficulty = new Easy();
});

$("#mediumGame").click(function() {
  difficulty = new Medium();
});

$("#hardGAme").click(function() {
  difficulty = new Hard();
});

var Easy = function()
{
  return {
    wordbank: ["cat","dog","fish","hat","ant"],
    numGuesses: 15,
    activeWord: "",
    wrongGuesses: []
  };
}

var Medium = function() {
  return { 
    wordbank: ["tailer","donkey","charley"],
    numGuesses: 12,
    activeWord: "",
    wrongGuesses: []
  }
};

var Hard = function() {
  return {
    wordbank: ["abruptly","bagpipes","bandwagon"],
    numGuesses: 8,
    activeWord: "",
    wrongGuesses: []
  } 
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
      // Difficulty is selected
        // if Easy is clicked
          // difficulty = new Easy();
        // if Medium is selected
          // difficulty = new Medium();
        // if Hard is selected
          // difficulty = new Hard();
    }
  }
};
