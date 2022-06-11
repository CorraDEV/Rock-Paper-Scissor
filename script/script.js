function computerPlay(){
    let items = Array('rock','paper','scissor');
    return items[Math.floor(Math.random()*items.length)];
}

let computerSelection = computerPlay();


