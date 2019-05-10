var compGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses=[];
var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// testing array which works!!
// for (var i = 0; i < letterArr.length; i++){
//     console.log(letterArr[i])
// }



//FUNCTIONS

// When the user presses a key, it will run the following function...

//if (guessesLeft < 9) {
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    var compGuess = letterArr[Math.floor(Math.random() * letterArr.length)];
console.log("computer guess: " + compGuess);
console.log("user guess: " + userGuess);

    guesses.push(userGuess);
    document.getElementById("uGuess").innerHTML =guesses;

    if (userGuess === compGuess) {
        wins++;
        document.getElementById("uWin").innerHTML =wins;
        guessesLeft = 10;
        guesses = [];
        //alert("You Won!!!")
        //how do I start the game over?
        }
    else {
        guessesLeft--;
        document.getElementById("gLeft").innerHTML =guessesLeft;
        
        if(guessesLeft===0){
            losses++;
            document.getElementById("uLoss").innerHTML =losses;
            guessesLeft = 10;
            guesses = [];
        }
        }
    };
   
//    // }