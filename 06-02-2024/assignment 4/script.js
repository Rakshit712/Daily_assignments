alert("This is a Number Guessing Game.");
let resp = 0;
let tryy = 0;
let actual = parseInt(Math.random()*100+1);
do{
    
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
    alert("Number of attempts you made are "+(tryy));
    resp = prompt("Would you  like to play again ? Enter 'y' to play and 'n' to exit");
    

}while(resp==="y");