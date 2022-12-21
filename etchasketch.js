const container = document.querySelector('.grid');
const button = document.querySelector('button');

for (let i = 0; i < 256; i++) {
  const gridSquares = document.createElement('gridSquares');
  gridSquares.classList.add('gridSquares');
  container.appendChild(gridSquares);
  
  gridSquares.addEventListener('mouseover', function mouseover(event) {
  event.target.style.background = 'black';
  });
}
  


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
    document.querySelector(".error").style.display = "none";
    game(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

  function resetBoard() {
    let squares = container.querySelectorAll('gridSquares');
    squares.forEach((gridSquares) => (gridSquares.remove()));
}

