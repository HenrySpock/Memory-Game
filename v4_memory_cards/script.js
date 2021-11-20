const gameContainer = document.getElementById("game");
let clickArray = []; 
let score = 0;
let eventArray = [];
let clicks = 0;
let disabled = [];
let gameScore = [];
let points = document.getElementById("score").innerText = `Score: ${score}`; 
let scoreList = [];
let gamesPlayed = 0;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let shuffledColors = shuffle(COLORS);
// here is a helper function to shuffle an array it returns the same array with values shuffled it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

// this function loops over the array of colors it creates a new div and gives it a class with the value of the color it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor="rgba(0, 0, 255, .2)";
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// ----------------------------------------------------------------------------------------------
// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  if (e.target.classList.contains("red")) {this.style.backgroundColor = "red"};
  if (e.target.classList.contains("blue")) {this.style.backgroundColor = "blue"};
  if (e.target.classList.contains("green")) {this.style.backgroundColor = "green"};
  if (e.target.classList.contains("orange")) {this.style.backgroundColor = "orange"};
  if (e.target.classList.contains("purple")) {this.style.backgroundColor = "purple"};

  clicks ++;
  console.log(clicks);
  console.log("you just clicked", e.target);
  eventArray.push(e.target);
  eventArray[0].setAttribute("id", "disable");

  clickArray.push(e.target);

  if ((clicks % 2 === 0) && (eventArray[0].className == eventArray[1].className)) {
    eventArray[0].setAttribute("class", "clicked");
    eventArray[1].setAttribute("class", "clicked");

    disabled.push(e.target);
    disabled.push(e.target);

    
              //game over state
              if ((disabled.length === COLORS.length) && (disabled.length !== '')) {
                
                document.getElementById("restart").innerText = 'Play again?';
                document.getElementsByClassName("saveScoreContainer")[0].setAttribute("id", "seeScoring");
                disabled = [];
                //score save------------------------------------------------------------------------------
                highScores();
                };
 
 
      // eventArray.pop();
      // eventArray.pop();
      clickArray.pop();
      clickArray.pop();
      score+=2;
      let points = document.getElementById("score").innerText = `Score: ${score}`;
      eventArray[1].setAttribute("id", "disable");
      eventArray.pop();
      eventArray.pop(); 
  }

  else if (clicks % 2 === 0) {
  document.getElementsByTagName("body")[0].setAttribute("id", "disable");
  // eventArray.pop();
  // eventArray.pop();
  setTimeout(flipBack, 1000);
  eventArray[0].setAttribute("id", "enable");
  eventArray.pop();
  eventArray.pop();
  }

}
// ----------------------------------------------------------------------------------------------

function flipBack(){
function flipper() {
    clickArray[0].style.backgroundColor="rgba(0, 0, 255, .2)";
    clickArray[1].style.backgroundColor="rgba(0, 0, 255, .2)";
    clickArray.pop();
    clickArray.pop();
    score-=1;
    let points = document.getElementById("score").innerText = `Score: ${score}`;
}
flipper();
document.getElementsByTagName("body")[0].setAttribute("id", "enable");
}
// ----------------------------------------------------------------------------------------------

// when the DOM loads
document.querySelector(".startGame").addEventListener("click", e => {
  e.stopPropagation();
  e.stopImmediatePropagation();

  disabled = []; //set to [] when done testing

  clicks = 0; 
  let newGame = document.getElementById('game');
  while (newGame.firstChild) newGame.removeChild(newGame.firstChild);
  // newGame.innerHTML = "wtf";
  function reset(){
    document.getElementById("initials").value = "";
    score = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    }
    reset();
  shuffle(COLORS);
  createDivsForColors(shuffledColors);
});
// ----------------------------------------------------------------------------------------------

document.querySelector(".highScoreButton").addEventListener("click", e => {
 
  let scores = JSON.parse(localStorage.getItem("theScore", scoreList));
  alert(JSON.stringify(scores));
 
  });
// ----------------------------------------------------------------------------------------------

  function highScores() {
    document.getElementById("scoreForm").addEventListener("submit", e => {
    e.preventDefault(); 
    e.stopPropagation();
    e.stopImmediatePropagation();

      let retrieval = JSON.parse(localStorage.getItem("theScore", scoreList)); 
console.log("retrieval " + JSON.stringify(retrieval));
      window.localStorage.clear();
console.log(localStorage);
      if (retrieval !== null && retrieval !== undefined){
        scoreList.push(retrieval);
        } 
console.log("scoreList after retrieval 'if'" + JSON.stringify(scoreList));
      
      const id = Date.now();
      let playerInput = document.getElementById("initials").value;  
      let scoreObject = {
        id: id,
        name: playerInput,
        score: score
      } 

console.log("the score object: " + JSON.stringify(scoreObject));
      scoreList.push(scoreObject);
console.log("scoreList after scoreObject 'push' " + JSON.stringify(scoreList));

      playerInput = "";
      localStorage.setItem("theScore", JSON.stringify(scoreList));
console.log(scoreObject);
      scoreList = [];
console.log("scoreList after '[]'" + scoreList);

      document.getElementById('initials').value = '';  
      gamesPlayed++;
console.log("games played: " + gamesPlayed);
console.log(localStorage);

document.getElementsByClassName("saveScoreContainer")[0].setAttribute("id", "hideScoring");
  }  
)};



 