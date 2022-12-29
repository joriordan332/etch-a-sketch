const container = document.querySelector('.grid');
const gridSquares = document.querySelectorAll('gridSquares');
let promptText = document.getElementById('prompt');
let userValue = document.getElementById('user-number');

userValue.addEventListener('focus', entryHint);


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

  gridSquares.addEventListener('mouseover', function mouseover(event) {
    event.target.style.background = 'black';
    });
    }
}
game(16)

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    game(input);
  } else {
    promptText.textContent = "Make sure it's a number from 2 to 99!";
  }
}

function resetBoard() {
  let squares = container.querySelectorAll('gridSquares');
  squares.forEach((gridSquares) => (gridSquares.remove()));
}

function entryHint() {
  promptText.textContent = "Enter a number between 2 and 100"; 
}

function changeColor(choice) {
  color = choice;
}