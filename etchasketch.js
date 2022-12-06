const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  const gridSquares = document.createElement("gridSquares");
  gridSquares.classList.add('gridSquares');
  container.appendChild(gridSquares);

  gridSquares.addEventListener('mouseover', function mouseover(event) {
     event.target.style.background = 'salmon';
     setTimeout(() => {
      event.target.style.background = "";
    }, 500);
  }, false);
    };
  


