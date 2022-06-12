function computerPlay(){
    let computer_choice = Array('rock','paper','scissor');
    computer_choice = computer_choice[Math.floor(Math.random()*computer_choice.length)];
    return computer_choice;
}

function playerPlay() {
    let player_choice = prompt("Rock, Paper or Scissor?");

    if (player_choice != null) 
    {
        player_choice = player_choice.toLowerCase();  

        if(player_choice == 'rock' || player_choice == 'paper' || player_choice == 'scissor')
        {
            return player_choice;
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
    
}

function playRound(playerSelection, computerSelection) {
    
    let match_result;

    if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissor' && computerSelection == 'paper'))
    {
        match_result = 'player won';
    }
    else if(playerSelection === computerSelection)
    {
        match_result = 'draw';
    }
    else
    {
        match_result = 'player lost';
    }
    
    return match_result;
}  

function game()
{
    let playerWins = 0;
    let computerWins = 0;
    let game_result;

    for(let i=0; i<5; i++)
    {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let round_result = playRound(playerSelection, computerSelection);
        if(round_result === 'player won')
        {
            playerWins++;
        }
        else if(round_result === 'player lost')
        {
            computerWins++;
        }
                       
        document.getElementById("player-choice").innerHTML += 'player choice: '+playerSelection+'<br>';
        document.getElementById("computer-choice").innerHTML += 'computer choice: '+computerSelection+'<br>';
        document.getElementById("match-result").innerHTML += round_result+'<br>';
    }

    if(playerWins > computerWins)
    {
        game_result = 'you won';
        
        
    }
    else if(playerWins < computerWins) 
    {
        game_result = 'you lost';
    }
    else
    {
        game_result = 'you draw';
    }
    document.getElementById("game-result").innerHTML = game_result;                
}