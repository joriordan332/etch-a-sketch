const container = document.querySelector('.grid');
const gridSquares = document.querySelectorAll('gridSquares');
let promptText = document.getElementById('prompt');
let userValue = document.getElementById('user-number');
userValue.addEventListener('focus', entryHint);

//Run game & draw functions that loads a default grid of 16x16 that can be drawn on once a colour is selected
game(16)
draw();

//Makes nested divs inside of the container div and removes the current grid when clicked
function game(size) {
  let squares = container.querySelectorAll('gridSquares');
  squares.forEach((gridSquares) => (gridSquares.remove()));

  let grid = size * size
  for (let i = 0; i < grid; i++){ 
    let grid = document.querySelector(".grid")
    const gridSquares = document.createElement("gridSquares");
    gridSquares.classList.add('gridSquares');
    container.appendChild(gridSquares);
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    }
    //Calling draw function allows a new grid to be drawn on once it is made
    draw();
}

//Function that runs the game function if the input is between the correct values but otherwise prompts the user with instructions
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    game(input);
  } else {
    promptText.textContent = "Make sure it's a number from 2 to 99!";
  }
}

//Removes all of the elements in the board when clear button clicked
function resetBoard() {
  let squares = container.querySelectorAll('gridSquares');
  squares.forEach((gridSquares) => (gridSquares.remove()));
}

//Instructions appear for the grid size when mouse clicks into this box
function entryHint() {
  promptText.textContent = "Enter a number between 2 and 100"; 
}

//Event listener added for any divs with the class name 'gridSquares
//Mouseover event triggers the changeColour function
function draw() {
  let columns = document.getElementsByClassName("gridSquares");
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColour);
  }

//When the black, rainbow or erasor buttons are clicked the background colour changes to the users choice
//Opacity style added for when black is clicked
function changeColour() {
  let rainbow = document.getElementById('rainbow');
  let black = document.getElementById('black');
  let eraserRadio = document.getElementById('eraser');

  if (black.checked) {
    this.style.backgroundColor = '#2e2b2b';
    this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
  } else if (rainbow.checked) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
  } else if (eraserRadio.checked) {
    this.style.backgroundColor = '';
  }
}
}
