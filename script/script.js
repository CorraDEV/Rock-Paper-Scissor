function computerPlay(){
    let computer_choice = Array('rock','paper','scissor');
    computer_choice = computer_choice[Math.floor(Math.random()*computer_choice.length)];
    document.getElementById("computer-choice").innerHTML = 'computer choice: '+computer_choice;
    return computer_choice;
}

function playerPlay() {
    let player_choice = prompt("Rock, Paper or Scissor?");

    if (player_choice != null) 
    {
        player_choice = player_choice.toLowerCase();  

        if(player_choice == 'rock' || player_choice == 'paper' || player_choice == 'scissor')
        {
            document.getElementById("player-choice").innerHTML = 'player choice: '+player_choice;;                
        }
        else
        {
            console.log('choice not valid');
        }
    }
    
    else
    {
        console.log('choice not valid');
    }

    return player_choice;
}

function playRound(playerSelection, computerSelection) {
    
    let match_result;

    if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissor' && computerSelection == 'paper'))
    {
        match_result = 'you won';
    }
    else if(playerSelection === computerSelection)
    {
        match_result = 'draw';
    }
    else
    {
        match_result = 'you lost';
    }
    
    document.getElementById("match-result").innerHTML = match_result;                
    return match_result;
}  

let player_choice = playerPlay();
let computer_choice = computerPlay();
let match_result = playRound(player_choice, computer_choice);