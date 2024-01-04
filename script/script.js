function computerPlay(){
    let computer_choice = ['rock','paper','scissor'];
    computer_choice = computer_choice[Math.floor(Math.random()*computer_choice.length)];
    return computer_choice;
}

function playerPlay(choice){
    let playerChoice;
    
    if(choice == "rock" || choice == "rockImg"){
        playerChoice = "rock";
    }
    else if(choice == "paper" || choice == "paperImg"){
        playerChoice = "paper";
    }
    else if(choice == "scissor" || choice == "scissorImg"){
        playerChoice = "scissor";
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {    
    let match_result;            

    if(
        playerSelection == 'rock' && computerSelection == 'scissor' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection == 'paper'
    )
        match_result = 'player won';    
    else if(playerSelection === computerSelection)    
        match_result = 'draw';    
    else    
        match_result = 'player lost';                

    return match_result;
}  

function setGame()
{            
    if(
        !document.getElementById('rock') ||
        !document.getElementById('paper') ||
        !document.getElementById('scissor')
    )    
    {
        const rockDiv = document.createElement('div');
        const rockImg = document.createElement('img');
        rockImg.src = './img/rock.png';
        rockImg.id = 'rockImg';
        rockDiv.appendChild(rockImg);
        rockDiv.id = 'rock';
        rockDiv.classList.add('choice');

        const paperDiv = document.createElement('div');
        const paperImg = document.createElement('img');
        paperImg.src = './img/paper.png';
        paperImg.id = 'paperImg';
        paperDiv.appendChild(paperImg);
        paperDiv.id = 'paper';
        paperDiv.classList.add('choice');

        const scissorDiv = document.createElement('div');
        const scissorImg = document.createElement('img');
        scissorImg.src = './img/scissors.png';
        scissorImg.id = 'scissorImg';
        scissorDiv.appendChild(scissorImg);
        scissorDiv.id = 'scissor';
        scissorDiv.classList.add('choice');
        
        const choicesContainer = document.createElement('div');
        choicesContainer.id = 'choicesContainer';
        choicesContainer.appendChild(rockDiv);
        choicesContainer.appendChild(paperDiv);
        choicesContainer.appendChild(scissorDiv);

        const body = document.querySelector('body');
        body.appendChild(choicesContainer);        
    }        
}

function deleteGame()
{            
    const body = document.querySelector('body');
    const choicesContainer = document.querySelector('#choicesContainer');                
    body.removeChild(choicesContainer);            
}

let match_result;
let playerPoints = 0;
let computerPoints = 0;
let matchResDiv;

document.addEventListener("click", (e) =>{                    
    if(e.target.id == "start-game"){
        e.target.style.display = "none";
        setGame();
    }
    else if(
        e.target.id == "rock" || 
        e.target.id == "rockImg" ||        
        e.target.id == "paper" ||
        e.target.id == "paperImg" ||
        e.target.id == "scissor" ||
        e.target.id == "scissorImg"
    )
    {            
        let playerChoice = playerPlay(e.target.id);
        let computerChoice = computerPlay();                
        
        match_result = playRound(playerChoice, computerChoice);        
        
        if(!document.getElementById("match_result")){
            matchResDiv = document.createElement('div');
            matchResDiv.id = 'match_result';                    
        }
                
        if(match_result === 'player won'){
            playerPoints++;        
            matchResDiv.style.color = 'green';
        }            
        else if(match_result === 'player lost'){
            computerPoints++;                
            matchResDiv.style.color = 'red';
        }
        else{
            matchResDiv.style.color = 'black';
        }                    

        matchResDiv.textContent = match_result;

        if(computerPoints == 5 || playerPoints == 5){
            deleteGame();
            if(computerPoints == 5){                
                matchResDiv.style.color = 'red';
                matchResDiv.textContent = "player lost the game";
            }
            else{                
                matchResDiv.style.color = 'green';
                matchResDiv.textContent = "player won the game";
            }
        }

        const body = document.querySelector('body');        
        body.appendChild(matchResDiv);    
    }
});