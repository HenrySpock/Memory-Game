const gameContainer = document.getElementById("game");
let clickArray = []; 
let score = 0;
let eventArray = [];
let clicks = 0;
let disabled = [];
let gameScore = [];
let points = document.getElementById("score").innerText = `SCORE: ${score}`; 
let scoreList = [];
let gamesPlayed = 0;
let HALFDECK = []; 
let FULLDECK = [];
let FLATFULL = [];
let deckSize = 0;

function unknownRGB() {
  var f = Math.round, u = Math.random, v = 255;
  return 'rgb(' + f(u()*v) + ',' + f(u()*v) + ',' + f(u()*v) + ')';
}






const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow"
];

const COLORSRAINBOW = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee"
];

const STARRY = [
"#0A0C12",
"#1d1d52",
"#2b2419",
"#65606C",
"#325598",
"#D2E5CB",
"#4f6666",
"#edf855",
"#98b7f0",
"#e9f0a1",
"#0A0C12",
"#1d1d52",
"#2b2419",
"#65606C",
"#325598",
"#D2E5CB",
"#4f6666",
"#edf855",
"#98b7f0",
"#e9f0a1"
]

function muteLoad(){
loaded();
muted();
}
// function mutedOver();

function royLoad(){
loaded();
roy();
} 

function starryLoad(){
loaded();
starry();
} 

function RANDOM12LOAD(){
loaded();
random12();
} 

function RANDOM24LOAD(){
loaded();
random24();
} 

function RANDOM36LOAD(){
loaded();
random36();
} 

function RANDOM48LOAD(){
loaded();
random48();
} 

function RANDOM60LOAD(){
loaded();
random60();
} 


// function royOver();

let shuffledColors = shuffle(COLORS);
let shuffledRainbow = shuffle(COLORSRAINBOW);
let shuffledStarry = shuffle(STARRY);
let shuffledRandom12 = shuffle(FLATFULL);
let shuffledRandom24 = shuffle(FLATFULL);
let shuffledRandom36 = shuffle(FLATFULL);
let shuffledRandom48 = shuffle(FLATFULL);
let shuffledRandom60 = shuffle(FLATFULL);
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
  // newDiv.style.backgroundColor = color;
  e.target.style.backgroundColor = e.target.classList;
  // let newFill = this.document.getElementByClassname
  // this.target.style.backgroundColor = this.className;
  // if (document.getElementById("game") = "muted") {
  // let currentArray = STARRY;
  // for (let i = 0; i < currentArray.length; i++) {
  // currentArray[i].style.backgroundColor = currentArray[i];
  // };
  // }
  // if (this.target.classList.contains(currentArray[i])) {this.backgroundColor = (currentArray[i])}


  // you can use event.target to see which element was clicked
  // if (e.target.classList.contains("red")) {this.style.backgroundColor = "rgb(219, 62, 62)"};
  // if (e.target.classList.contains("blue")) {this.style.backgroundColor = "rgb(45, 88, 230)"};
  // if (e.target.classList.contains("green")) {this.style.backgroundColor = "rgb(89, 167, 92)"};
  // if (e.target.classList.contains("orange")) {this.style.backgroundColor = "rgb(247, 164, 88)"};
  // if (e.target.classList.contains("purple")) {this.style.backgroundColor = "rgb(159, 74, 185)"};
  // if (e.target.classList.contains("yellow")) {this.style.backgroundColor = "rgb(253, 255, 111)"};
  // if (e.target.classList.contains("#ff0000")) {this.style.backgroundColor = "#ff0000"};
  // if (e.target.classList.contains("#ffa500")) {this.style.backgroundColor = "#ffa500"};
  // if (e.target.classList.contains("#ffff00")) {this.style.backgroundColor = "#ffff00"};
  // if (e.target.classList.contains("#008000")) {this.style.backgroundColor = "#008000"};
  // if (e.target.classList.contains("#0000ff")) {this.style.backgroundColor = "#0000ff"};
  // if (e.target.classList.contains("#4b0082")) {this.style.backgroundColor = "#4b0082"};
  // if (e.target.classList.contains("#ee82ee")) {this.style.backgroundColor = "#ee82ee"};
  // if (e.target.classList.contains("#0A0C12")) {this.style.backgroundColor = "#0A0C12"};
  // if (e.target.classList.contains("#1d1d52")) {this.style.backgroundColor = "#1d1d52"};
  // if (e.target.classList.contains("#2b2419")) {this.style.backgroundColor = "#2b2419"};
  // if (e.target.classList.contains("#65606C")) {this.style.backgroundColor = "#65606C"};
  // if (e.target.classList.contains("#325598")) {this.style.backgroundColor = "#325598"};
  // if (e.target.classList.contains("#D2E5CB")) {this.style.backgroundColor = "#D2E5CB"};
  // if (e.target.classList.contains("#4f6666")) {this.style.backgroundColor = "#4f6666"};
  // if (e.target.classList.contains("#edf855")) {this.style.backgroundColor = "#edf855"};
  // if (e.target.classList.contains("#98b7f0")) {this.style.backgroundColor = "#98b7f0"};
  // if (e.target.classList.contains("#e9f0a1")) {this.style.backgroundColor = "#e9f0a1"};
  
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

              if ((disabled.length === COLORS.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("muted"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === COLORSRAINBOW.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("roy"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === STARRY.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("starry"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === FLATFULL.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("starry"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}
                
                function gameOver(){
                {
                document.querySelector(".startGame").innerText = "Play again?";
                document.getElementsByClassName("saveScoreContainer")[0].setAttribute("id", "seeScoring");
                disabled = [];
                // document.getElementsByClassName("startGame")[0].removeAttribute("class", "disable");
                //score save------------------------------------------------------------------------------
                highScores();
                };
                }
 
 
      // eventArray.pop();
      // eventArray.pop();
      clickArray.pop();
      clickArray.pop();
      score+=2;
      let points = document.getElementById("score").innerText = `SCORE: ${score}`;
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
    let points = document.getElementById("score").innerText = `SCORE: ${score}`;
}
flipper();
document.getElementsByTagName("body")[0].setAttribute("id", "enable");
}
// ----------------------------------------------------------------------------------------------

function loaded() {
// when the DOM loads
// document.querySelector(".startGame").addEventListener("click", e => {
//   e.stopPropagation();
//   e.stopImmediatePropagation();

  disabled = []; //set to [] when done testing

  clicks = 0; 
  let newGame = document.getElementById('game');
  while (newGame.firstChild) newGame.removeChild(newGame.firstChild);
  // newGame.innerHTML = "wtf";
  function reset(){
    document.getElementById("initials").value = "";
    FLATFULL = [];
    score = 0;
    document.getElementById("score").innerText = `SCORE: ${score}`;    
    }
    reset();
};

function createDeck(){
  for (let i = 0; i < deckSize; i ++) {
    let rando = unknownRGB();
    HALFDECK.push(rando);
  }
  
  FULLDECK.push(HALFDECK);
  FULLDECK.push(HALFDECK);
  HALFDECK = [];
  FLATFULL = FULLDECK.flat(); 
  FULLDECK = [];
  deckSize = 0;
} 

function muted(){
document.getElementById("game").setAttribute("class", "muted");
document.getElementById("currentGame").innerText = `Primary and Secondary`;
shuffle(COLORS);
createDivsForColors(shuffledColors);
}

function roy(){
document.getElementById("game").setAttribute("class", "roy");
document.getElementById("currentGame").innerText = `ROY G BIV`;
shuffle(COLORSRAINBOW);
createDivsForColors(shuffledRainbow);
}

function starry(){
  document.getElementById("game").setAttribute("class", "starry");
  document.getElementById("currentGame").innerText = `The Starry Night`;
shuffle(STARRY);
createDivsForColors(shuffledStarry);
}

function random12(){
document.getElementById("game").setAttribute("class", "random12");
document.getElementById("currentGame").innerText = `Random 12`;
deckSize = 12;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random24(){
document.getElementById("game").setAttribute("class", "random24");
document.getElementById("currentGame").innerText = `Random 24`;
deckSize = 24;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random36(){
document.getElementById("game").setAttribute("class", "random36");
document.getElementById("currentGame").innerText = `Random 36`;
deckSize = 36;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random48(){
document.getElementById("game").setAttribute("class", "random48");
document.getElementById("currentGame").innerText = `Random 48`;
deckSize = 48;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random60(){
document.getElementById("game").setAttribute("class", "random60");
document.getElementById("currentGame").innerText = `Random 60`;
deckSize = 60;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}



// ----------------------------------------------------------------------------------------------

document.querySelector(".highScoreContainer").addEventListener("click", e => {
 
  let scores = JSON.parse(localStorage.getItem("theScore", scoreList));
  alert("My Top 5: \n" + JSON.stringify(scores));
 
  });
// ----------------------------------------------------------------------------------------------

  function highScores() {
    document.getElementById("scoreForm").addEventListener("submit", e => {
    e.preventDefault(); 
    e.stopPropagation();
    e.stopImmediatePropagation();
      if (JSON.parse(localStorage.getItem("theScore", scoreList)) !== null) {
        scoreList = JSON.parse(localStorage.getItem("theScore", scoreList))
      }
      else scoreList = [];
console.log("retrieval " + JSON.stringify(scoreList));
      window.localStorage.clear();
console.log(localStorage);
      // if (retrieval !== null && retrieval !== undefined){
      //   scoreList.push(retrieval);
      //   } 
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

      //sorting
      // scoreList.sort((a,b) => {
      //   return b.score - a.score;
      // })

      // let sorted = _.sortBy( scoreList, 'score' );
      // scoreList = sorted;

      function compare (a,b) {
        if ( a.score < b.score ){
          return -1;
        }
        if ( a.score > b.score ){
          return 1;
        }
        return 0;
      }

      scoreList.sort( compare );
      scoreList.reverse();
      scoreList.splice(5);
      
console.log("scoreList after sort " + JSON.stringify(scoreList));

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



 