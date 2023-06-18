var pOne=0;
var pTwo=0;
const playerSelection= "rock";
var computerSelection;
function getComputerChoice(){
const choice= ["rock", "paper", "scissors"];
return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=="rock" && computerSelection== "rock"){
        console.log("TIE GAME");
    }else if(playerSelection=='rock' && computerSelection=="paper" ){
            console.log("PAPER BEATS ROCK YOU LOSE");
            pTwo++;
        }
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        console.log('ROCK BEATS SCISSORS YOU WIN');
        pOne++;
    }

    if(playerSelection=="paper" && computerSelection== "paper"){
        console.log("TIE GAME");
    }else if(playerSelection=='paper' && computerSelection=="rock" ){
            console.log("PAPER BEATS ROCK YOU WIN");
            pOne++;
        }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        console.log('SCISSORS BEATS PAPER YOU LOSE');
        pTwo++;
    }
    if(playerSelection=="scissors" && computerSelection== "scissors"){
        console.log("TIE GAME");
    }else if(playerSelection=='scissors' && computerSelection=="paper" ){
            console.log("SCISSORS BEATS PAPER YOU WIN");
            pOne++;
        }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        console.log('ROCK BEATS SCISSORS YOU LOSE');
        pTwo++;
    }
    }

    function playGame(){
        for(var i =0; i<5; i++){
            console.log('Game '+i);
            computerSelection=getComputerChoice();
             console.log( "Player choice = " + playerSelection);
     console.log('Computer choice = ' + computerSelection);
            playRound(playerSelection,computerSelection);
        }
        if(pOne>pTwo){
            console.log("You Win");
        }else if(pOne>pTwo){
            console.log("You Lose");
        }
    }
    console.log(playGame());

