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

var Player1= prompt("Please enter first player name", "");
if(Player1==null || Player1==""){
  Player1 = "player1"
}
document.getElementById("player1_score").innerHTML = `${Player1}'s score : `
var Player2= prompt("Please enter second player name", "");
if(Player2==null || Player2==""){
  Player2 = "player2"
}
document.getElementById("player2_score").innerHTML = `${Player2}'s score : `



let playerOptions = [stone, paper, scissor];
let decider = [];
document.getElementById("feed").innerHTML = `${Player1}'s Turn`;
playerOne();
function playerOne() {
  playerOptions.forEach((option) => {
    option.onclick = () => {
      decider.push(option.innerText);

      document.getElementById("feed").innerHTML = `${Player2}'s Turn`;
      console.log(decider);
      
      result.textContent = " ";
      playerTwo();

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
    choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
  } else if (player1 == "stone") {
    if (player2 == "paper") {
      result.textContent = `${Player2} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${Player1} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  } else if (player1 == "scissor") {
    if (player2 == "stone") {
      result.textContent = `${Player2} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${Player1} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  } else if (player1 == "paper") {
    if (player2 == "scissor") {
      result.textContent = `${Player2} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_2++
      score2.textContent = score_2
    } else {
      result.textContent = `${Player1} won`;
      choosing.innerHTML = `${Player1} Choose ${player1} & ${Player2} Choose ${player2}`
      score_1++
      score1.textContent = score_1
    }
  }
  document.getElementById("feed").innerHTML = `${Player1}'s Turn`;
  if(score_1>=score_2){
    score1.style.color = '#00FF00'
    score2.style.color = '#F44F2B'
  }else{
    score1.style.color = '#F44F2B'
    score2.style.color = '#00FF00'
  }
  ///
  decider = [];
  playerOne();
}


