function game(user){
let game = ['rock','paper','scissor']
let computerGame = game[Math.floor(Math.random()*3)];

if(user == computerGame){
    console.log("Tie this game");
    
}

else if((user =="rock" && computerGame == "scissor")||( user == "paper" && computerGame == "rock")||(user == "scissor" && computerGame == "paper")){
    console.log("user win");
    
}
else{
    console.log("Computer win");
    
}



}


game("scissor")