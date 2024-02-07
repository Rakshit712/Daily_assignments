alert("This is a number guessing game");
let resp = "y";
let tryy = 0;
let actual = parseInt(Math.random()*100+1);
let result = [];

function playGame(){
    do{
     let guessNum = prompt("Enter your guess ");
        guessNum = parseInt(guessNum);
        if (guessNum==actual){
            alert("Hoorey!! You guessed the number correctly.");
            tryy++;
            break;
        }else if(guessNum>actual){
            alert("Too High");
            tryy++; 
            
        }else{
            alert("Too Low");
            tryy++;
            
        }
    }while(true);
    
    result.push(tryy)
    tryy=0;
    
}
function askToPlayAgain(){

  return resp = prompt("Would you  like to play again ? Enter 'y' to play and 'n' to exit");

}
do{
    playGame();
    

}
while(askToPlayAgain()==="y")
alert("Number of steps you took in each game are: "+result);
