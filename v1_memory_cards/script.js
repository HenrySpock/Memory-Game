const gameContainer = document.getElementById("game");
let clickArray = []; 
let score = 0;

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

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
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

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
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

let eventArray = [];
let clicks = 0;

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
  setTimeout(flipBack, 2000);
  eventArray[0].setAttribute("id", "enable");
  eventArray.pop();
  eventArray.pop();
  }
}


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



// when the DOM loads
createDivsForColors(shuffledColors);
