function computerPlay(){
    let computer_choice = Array('rock','paper','scissor');
    document.getElementById("demo2").innerHTML = computer_choice;
    return computer_choice[Math.floor(Math.random()*computer_choice.length)];
}

function playerPlay() {
    let player_choice = prompt("Rock, Paper or Scissor?");

    if (player_choice != null) 
    {
        player_choice = player_choice.toLowerCase();  

        if(player_choice == 'rock' || player_choice == 'paper' || player_choice == 'scissor')
        {
            document.getElementById("demo").innerHTML = player_choice;                
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


let computerSelection = computerPlay();

let playerSelection = playerPlay();


