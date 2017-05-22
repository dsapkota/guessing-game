var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 4;
var html;
var userGuess;
var userGuessStr="";
var countguess= ['_', '_', '_', '_'];



html= "<p>Guess what letter I'm thinking of</p>"+
            "<p>wins:" + wins +"</p>"+
            "<p>losses: " +losses+"</p>"+
            "<p>guesses Left: " + guesses +"</p>"+
            "<p>Your Guess so far:</p>";

  document.querySelector ("#game").innerHTML =html;


   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    userGuess = event.key;
    userGuess =userGuess.toLowerCase();
    console.log("userGuess:" + userGuess);

    if (countguess===0) {
       userGuessStr=userGuess;
    }


    computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    console.log(computerChoice); 

    if(userGuess === computerChoice){
        wins++;

        html= "<p>Guess what letter I'm thinking of</p>"+
            "<p>wins:" + wins +"</p>"+
            "<p>losses: " +losses+"</p>"+
            "<p>guesses Left: " + guesses +"</p>"+
            "<p>Your Guess so far:</p>";

        document.querySelector ("#game").innerHTML =html;

    }else{
        guesses--;
    }
  };

  if (countguess === 0){

userGuessStr = userGuess;

}

else{
  userGuessStr = userGuessStr + ", " + userGuess;

};

 document.querySelector ("userGuessStr").innerHTML =html;


