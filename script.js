// Variables 
var pOne=0;
var pTwo=0;
var playerSelection;
var computerSelection;
var timesPlayed=0;
var closeBtn= document.getElementById("closeBtn");
var playAgain= document.getElementById("playAgain");
var exit= document.getElementById("exit");
var popup= document.getElementById("popup");
var playerScore = document.getElementById("playerScore")
var computerScore= document.getElementById("computerScore");
var result = document.getElementById("result");
var resultArr = ["TIE GAME","PAPER BEATS ROCK YOU LOSE","ROCK BEATS SCISSORS YOU WIN",
"PAPER BEATS ROCK YOU WIN","SCISSORS BEATS PAPER YOU LOSE","SCISSORS BEATS PAPER YOU WIN","ROCK BEATS SCISSORS YOU LOSE"];
var winnner = document.getElementById("winner");


//Function to get random computer choice
function getComputerChoice(){
var choice= ["rock", "paper", "scissors","paper", "rock", "scissors"]
return choice[Math.floor(Math.random()*6)]
}
var rock= document.getElementById("rock");
var paper=document.getElementById("paper");
var scissors=document.getElementById("scissors");


//Event listeners
rock.addEventListener("click",() =>{
    playerSelection="rock";
             game();
         });
paper.addEventListener("click",() => {
    playerSelection="paper";
             game();
             
         });
 scissors.addEventListener("click",() => {
    playerSelection="scissors"
             game();
             
         });
closeBtn.addEventListener("click", () =>{
            popup.style.display="none";
        })
playAgain.addEventListener("click", ()=>{
    window.location.reload()
})
exit.addEventListener("click", () =>{
    popup.style.display="none";
})


 // Function to end game and display popup asking to play again or exit        
function game(){
    playRound(playerSelection,getComputerChoice());
  if(pOne ==5 || pTwo ==5){
    if(pOne>pTwo){
winnner.textContent="Good job my boy"
    }else{
winnner.textContent="You a sucka"
    }
    popup.style.display="block";
  }

}


// Function for every round played
function playRound(playerSelection, computerSelection){
    if(pOne <5 && pTwo<5){
    if(playerSelection==computerSelection){
        timesPlayed++;
        result.textContent= resultArr[0];
    }else if(playerSelection=='rock' && computerSelection=="paper" ){
            pTwo++;
            timesPlayed++;
            computerScore.textContent="Computer Score : " + pTwo;  
            result.textContent= "Result: "+resultArr[1];
        }
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        pOne++;
        timesPlayed++;
        playerScore.textContent="Player Score : " + pOne;
        result.textContent= "Result: "+ resultArr[2];
    }
    else if(playerSelection=='paper' && computerSelection=="rock" ){
            pOne++;
            timesPlayed++;
            playerScore.textContent="Player Score : " + pOne;
            result.textContent="Result: "+ resultArr[3];
        }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        pTwo++;
        timesPlayed++;
        computerScore.textContent="Computer Score : " + pTwo;
        result.textContent="Result: "+ resultArr[4];
    }else if(playerSelection=='scissors' && computerSelection=="paper" ){
            pOne++;
            timesPlayed++;
            playerScore.textContent="Player Score : " + pOne;
            result.textContent="Result: "+ resultArr[5];
        }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        pTwo++;
        timesPlayed++;
        computerScore.textContent="Computer Score : " + pTwo;
        result.textContent="Result: "+ resultArr[6];
    }
}
}
