const container = document.querySelector('#container');
const button = document.querySelector('button')

  
function game () {
  let grid;
  button.addEventListener('click',() => {
  do {
    grid = prompt("How many squares do you want per side 1-100?")
  } while (grid > 100);
    for (let i = 0; i < grid *2; i++) 
  if (grid > 0 && grid <= 100) {
  const gridSquares = document.createElement("gridSquares");
  gridSquares.classList.add('gridSquares');
  container.appendChild(gridSquares);
  gridSquares.addEventListener('mouseover', function mouseover(event) {
     event.target.style.background = 'salmon';
    });
  }
});
}

game()