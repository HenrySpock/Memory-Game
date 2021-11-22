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

const ANGEL = [
"#62605D",
"#948B82",
"#95A1B6",
"#CDD4DC",
"#95B6E1",
"#332B26",
"#4F3B30",
"#A67653",
"#805640",
"#BA9168",
"#62605D",
"#948B82",
"#95A1B6",
"#CDD4DC",
"#95B6E1",
"#332B26",
"#4F3B30",
"#A67653",
"#805640",
"#BA9168"
]

const DOGS = [
"#696962",
"#1D0707",
"#A57D61",
"#EEE8DD",
"#C7C2AB",
"#3D2D29",
"#734034",
"#D04B50",
"#4D688C",
"#558255",
"#696962",
"#1D0707",
"#A57D61",
"#EEE8DD",
"#C7C2AB",
"#3D2D29",
"#734034",
"#D04B50",
"#4D688C",
"#558255"
]

const LILIES = [
"#284038",
"#18291E",
"#6EA7D3",
"#304665",
"#406A97",
"#586C4B",
"#96A09D",
"#D8DEBE",
"#AC4E36",
"#712512",
"#284038",
"#18291E",
"#6EA7D3",
"#304665",
"#406A97",
"#586C4B",
"#96A09D",
"#D8DEBE",
"#AC4E36",
"#712512"
]

const MEMORY = [
"#3F2B27",
"#332829",
"#928574",
"#663929",
"#D17846",
"#D5A468",
"#697D9C",
"#E0E6F2",
"#86A9D8",
"#D9CBAD",
"#3F2B27",
"#332829",
"#928574",
"#663929",
"#D17846",
"#D5A468",
"#697D9C",
"#E0E6F2",
"#86A9D8",
"#D9CBAD"
]

const BAYUSHI = [
"#60516F",
"#7068A1",
"#BF7B66",
"#B8C2DF",
"#EFEDE4",
"#6E5155",
"#050304",
"#2F1818",
"#5B282C",
"#DD4439",
"#60516F",
"#7068A1",
"#BF7B66",
"#B8C2DF",
"#EFEDE4",
"#6E5155",
"#050304",
"#2F1818",
"#5B282C",
"#DD4439"
]

const LINK = [
"#70AF23",
"#38B6F1",
"#FBD9A9",
"#9C5124",
"#9E6440",
"#6462B5",
"#D4CE46",
"#2238E5",
"#0D5135",
"#508372",
"#70AF23",
"#38B6F1",
"#FBD9A9",
"#9C5124",
"#9E6440",
"#6462B5",
"#D4CE46",
"#2238E5",
"#0D5135",
"#508372"
]

const MONT = [
"#B5B4B8",
"#D0B3B8",
"#AE797E",
"#805D6B",
"#E3C4BF",
"#A97E62",
"#6A6373",
"#A05F64",
"#DF9BA1",
"#80444C",
"#B5B4B8",
"#D0B3B8",
"#AE797E",
"#805D6B",
"#E3C4BF",
"#A97E62",
"#6A6373",
"#A05F64",
"#DF9BA1",
"#80444C"
] 

const JOKER = [
"#36282F",
"#6E595B",
"#70311A",
"#878B96",
"#96B0BC",
"#261B20",
"#BED5DD",
"#060504",
"#A17149",
"#696C6F",
"#36282F",
"#6E595B",
"#70311A",
"#878B96",
"#96B0BC",
"#261B20",
"#BED5DD",
"#060504",
"#A17149",
"#696C6F"
]

const ROSS = [
"#26346C",
"#221950",
"#E4E4E5",
"#B9813C",
"#D7D16E",
"#8A888B",
"#C7432A",
"#237756",
"#863535",
"#43341B",
"#26346C",
"#221950",
"#E4E4E5",
"#B9813C",
"#D7D16E",
"#8A888B",
"#C7432A",
"#237756",
"#863535",
"#43341B"
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

function dogsLoad(){
loaded();
dogs();
} 

function bobLoad(){
loaded();
bob();
} 

function linkLoad(){
loaded();
link();
} 

function jokerLoad(){
loaded();
joker();
} 

function bayushiLoad(){
loaded();
bayushi();
} 

function daliLoad(){
loaded();
dali();
} 

function angelLoad(){
loaded();
angel();
} 

function starryLoad(){
loaded();
starry();
} 

function liliesLoad(){
loaded();
lilies();
} 

function montLoad(){
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
let shuffledDogs = shuffle(DOGS);
let shuffledRoss = shuffle(ROSS);
let shuffledLink = shuffle(LINK);
let shuffledJoker = shuffle(JOKER);
let shuffledBayushi = shuffle(BAYUSHI);
let shuffledMemory = shuffle(MEMORY);
let shuffledAngel = shuffle(ANGEL);
let shuffledStarry = shuffle(STARRY);
let shuffledLilies = shuffle(LILIES);
let shuffledMont = shuffle(MONT);
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
  
  e.target.style.backgroundColor = e.target.classList;
    
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



              if ((disabled.length === DOGS.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("dogs"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === ROSS.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("bob"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === LINK.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("link"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === JOKER.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("joker"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === BAYUSHI.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("bayushi"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === MEMORY.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("dali"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === ANGEL.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("angel"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

                

              if ((disabled.length === STARRY.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("starry"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}



              if ((disabled.length === LILIES.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("lilies"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}

              if ((disabled.length === MONT.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("mont"))) {gameOver()
                document.getElementById("currentGame").innerText = `ᕕ( ᐛ )ᕗ LET'S GO!`;}  



              if ((disabled.length === FLATFULL.length) && 
              (disabled.length !== '') && 
              (document.getElementById("game").classList.contains("flatfull"))) {gameOver()
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

function dogs(){
document.getElementById("game").setAttribute("class", "dogs");
document.getElementById("currentGame").innerText = `Dogs Player Poker`;
shuffle(DOGS);
createDivsForColors(shuffledDogs);
}

function bob(){
document.getElementById("game").setAttribute("class", "bob");
document.getElementById("currentGame").innerText = `Bob Ross Colors of Choice`;
shuffle(ROSS);
createDivsForColors(shuffledRoss);
}

function link(){
document.getElementById("game").setAttribute("class", "link");
document.getElementById("currentGame").innerText = `The Legend of Zelda`;
shuffle(LINK);
createDivsForColors(shuffledLink);
}

function joker(){
document.getElementById("game").setAttribute("class", "joker");
document.getElementById("currentGame").innerText = `The Animated Batman: The Joker`;
shuffle(JOKER);
createDivsForColors(shuffledJoker);
}

function bayushi(){
document.getElementById("game").setAttribute("class", "bayushi");
document.getElementById("currentGame").innerText = `Bayushi Kwanchai`;
shuffle(BAYUSHI);
createDivsForColors(shuffledBayushi);
}

function dali(){
document.getElementById("game").setAttribute("class", "dali");
document.getElementById("currentGame").innerText = `The Persistence of Memory`;
shuffle(MEMORY);
createDivsForColors(shuffledMemory);
}

function angel(){
document.getElementById("game").setAttribute("class", "angel");
document.getElementById("currentGame").innerText = `Fallen Angel`;
shuffle(ANGEL);
createDivsForColors(shuffledAngel);
}

function starry(){
  document.getElementById("game").setAttribute("class", "starry");
  document.getElementById("currentGame").innerText = `The Starry Night`;
shuffle(STARRY);
createDivsForColors(shuffledStarry);
}

function lilies(){
  document.getElementById("game").setAttribute("class", "lilies");
  document.getElementById("currentGame").innerText = `Monet's Lilies`;
shuffle(LILIES);
createDivsForColors(shuffledLilies);
}

function mont(){
  document.getElementById("game").setAttribute("class", "mont");
  document.getElementById("currentGame").innerText = `Mont St. Michel`;
shuffle(MONT);
createDivsForColors(shuffledMont);
}

function random12(){
document.getElementById("game").setAttribute("class", "flatfull, random12");
document.getElementById("currentGame").innerText = `Random 12`;
deckSize = 12;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random24(){
document.getElementById("game").setAttribute("class", "flatfull, random24");
document.getElementById("currentGame").innerText = `Random 24`;
deckSize = 24;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random36(){
document.getElementById("game").setAttribute("class", "flatfull, random36");
document.getElementById("currentGame").innerText = `Random 36`;
deckSize = 36;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random48(){
document.getElementById("game").setAttribute("class", "flatfull, random48");
document.getElementById("currentGame").innerText = `Random 48`;
deckSize = 48;
createDeck();
shuffle(FLATFULL);
createDivsForColors(FLATFULL);
}

function random60(){
document.getElementById("game").setAttribute("class", "flatfull, random60");
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



 