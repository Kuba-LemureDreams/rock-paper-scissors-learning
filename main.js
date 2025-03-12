const rps = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let dice = Math.random();
    if (dice > 0.66){
        return 0;
    } else if (dice < 0.33){
        return 1;
    } else {
        return 2;
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?");
    if (choice == "rock"){
        return 0;
    } else if (choice == "paper"){
        return 1;
    } else if (choice == "scissors"){
        return 2;
    }
}

function resetScore(){
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice, computerChoice){
    console.log("You chose: " + rps[humanChoice]);
    console.log("Computer chose: " + rps[computerChoice])
    console.log("-----------------------------")
    if (humanChoice == computerChoice){
        console.log("A draw!");
    } else if (humanChoice == 0) {
        if (computerChoice == 1){
            console.log("Computer wins!")
            computerScore++;
        } else{
            console.log("You win!");
            humanScore++;
        }
    } else if (humanChoice == 1) {
        if (computerChoice == 2){
            console.log("Computer wins!")
            computerScore++;
        } else{
            console.log("You win!");
            humanScore++;
        }
    } else if (humanChoice == 2) {
        if (computerChoice == 0){
            console.log("Computer wins!")
            computerScore++;
        } else{
            console.log("You win!");
            humanScore++;
        }
    }
}

function playGame(rounds){
    resetScore();
    for (let i = 0; i < rounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Your score: " + humanScore)
    console.log("Computer score: " + computerScore)
    if (humanScore > computerScore) {
        console.log("You win game!")
    } else if (humanScore == computerScore) {
        console.log("It is a draw!")
    } else {
        console.log("Computer wins game!")
    }
}

playGame(3)