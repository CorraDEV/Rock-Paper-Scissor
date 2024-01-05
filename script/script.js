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
    const body = document.body;
    const matchResDiv = document.getElementById('matchResDiv'); 
    let choicesContainer;

    if(matchResDiv){
        body.removeChild(matchResDiv);
    }         
    
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
        
        choicesContainer = document.createElement('div');
        choicesContainer.id = 'choicesContainer';
        choicesContainer.appendChild(rockDiv);
        choicesContainer.appendChild(paperDiv);
        choicesContainer.appendChild(scissorDiv);                        
    }        

    if(!document.getElementById('scoreBothDiv')){
        const scoreBothDiv = document.createElement('div');
        scoreBothDiv.id = 'scoreBothDiv';        
        
        const playerScoreDiv = document.createElement('div');
        playerScoreDiv.id = 'playerScoreDiv';
        playerScoreDiv.textContent = 'Player: 0';
        
        const computerScoreDiv = document.createElement('div');
        computerScoreDiv.id = 'computerScoreDiv';
        computerScoreDiv.textContent = 'Computer: 0';
        scoreBothDiv.appendChild(playerScoreDiv);
        scoreBothDiv.appendChild(computerScoreDiv);
        
        body.appendChild(choicesContainer);                
        body.appendChild(scoreBothDiv);
    }
    else{        
        playerScoreDiv.textContent = 'Player: 0';
        computerScoreDiv.textContent = 'Computer: 0';
        body.insertBefore(choicesContainer, scoreBothDiv);
    }    
}

function deleteGame()
{            
    const body = document.querySelector('body');
    const choicesContainer = document.querySelector('#choicesContainer');                
    const scoreBothDiv = document.querySelector('#scoreBothDiv');
    body.removeChild(choicesContainer);                                     
}

let playerPoints = 0;
let computerPoints = 0;

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
        let roundRes = playRound(playerChoice, computerChoice);                        

        if(roundRes === 'player won')
            playerPoints++;
        else if(roundRes === 'player lost') 
            computerPoints++;        

        console.log(playerPoints, computerPoints);

        const computerScoreDiv = document.querySelector('#computerScoreDiv');
        const playerScoreDiv = document.querySelector('#playerScoreDiv');
        computerScoreDiv.textContent = 'Computer: ' + computerPoints;
        playerScoreDiv.textContent = 'Player: ' + playerPoints;

        if(computerPoints == 5 || playerPoints == 5){
            const matchResDiv = document.createElement("div");             
            matchResDiv.id = "matchResDiv";
            deleteGame();
            if(computerPoints === 5){                
                matchResDiv.style.color = 'red';
                matchResDiv.textContent = "player has lost".toUpperCase();
            }
            else{                
                matchResDiv.style.color = 'green';
                matchResDiv.textContent = "player has won".toUpperCase();
            }
            const body = document.querySelector('body');                    
            body.appendChild(matchResDiv);    
            const restartBtn = document.querySelector('#start-game');
            restartBtn.textContent = "restart game".toUpperCase();
            restartBtn.style.display = "block";
            playerPoints = 0;
            computerPoints = 0;            
        }        
    }
});