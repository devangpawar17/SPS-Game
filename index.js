function gameRestart() {
  document.getElementById("feed").innerHTML = "feed";
}

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let result = document.getElementById("result");
let choosing = document.getElementById("choosing")
let score_1 = 0
let score_2 = 0 

var player= prompt("Please enter your name", "");
document.getElementById("player_score").innerHTML = `${player}'s score`

let playerOptions = [stone, paper, scissor];
let decider = [];
playerOne();
function playerOne() {
  playerOptions.forEach((option) => {
    option.onclick = () => {
      decider.push(option.innerText);
      playerTwo();
      document.getElementById("feed").innerHTML = `Hello ${player}`;
      result.textContent = " ";
      console.log(decider);
      const choiceNumber = Math.floor(Math.random()*3)
      const comp = ['paper','stone','scissor']
      document.getElementById(comp[choiceNumber]).click()
    };
  });
}

function playerTwo() {
  
  playerOptions.forEach((option) => {
    option.onclick = () => {
      decider.push(option.innerText);
      console.log(decider);
      winner();
    };
  });
}

function winner() {
    let score1 = document.getElementById("score_1") 
    let score2 = document.getElementById("score_2")

  let player1 = decider[0];
  let player2 = decider[1];
  //main logic

  if (player1 === player2) {
    result.textContent = "Tie";
    choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
  } else if (player1 == "stone") {
    if (player2 == "paper") {
      result.textContent = "Computer won";
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${player} won`;
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  } else if (player1 == "scissor") {
    if (player2 == "stone") {
      result.textContent = "Computer won";
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${player} won`;
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  } else if (player1 == "paper") {
    if (player2 == "scissor") {
      result.textContent = "Computer won";
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${player} won`;
      choosing.innerHTML = `${player} Choose ${player1} & Computer Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  }
  document.getElementById("feed").innerHTML = `Hello ${player}`;
  ///
  decider = [];
  playerOne();
}


