for (let i = 0; i < 16; i++) {
  const container = document.querySelector('#container');
  const gridSquares = document.createElement("gridSquares");
  gridSquares.classList.add('gridSquares');
  container.appendChild(gridSquares);
}