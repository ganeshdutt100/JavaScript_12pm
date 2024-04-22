let userScore =0;
let computerScore =0;
function game(user){
let game = ['rock','paper','scissor']
let computerGame = game[Math.floor(Math.random()*3)];

if(user == computerGame){
    console.log("Tie this game");
     document.getElementById('result').innerHTML ="Tie this game";
     
    
}

else if((user =="rock" && computerGame == "scissor")||( user == "paper" && computerGame == "rock")||(user == "scissor" && computerGame == "paper")){
    console.log("user win");
    document.getElementById('result').innerHTML ="user win";
    userScore++;
   
    
}
else{
    console.log("Computer win");
    document.getElementById('result').innerHTML ="Computer win";
    computerScore++;

    
}

 document.getElementById('userScore').innerHTML=`User Score ${userScore} : `
 document.getElementById('computerScore').innerHTML=`Computer Score ${computerScore} : `

console.log(userScore);
console.log(computerScore);


}




