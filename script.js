let container = document.getElementById('container');
createDivs(16,16);
let gridButton = document.getElementById('grid-selector');
let resetButton = document.getElementById('reset');

gridButton.addEventListener('click', changeGrid);
resetButton.addEventListener('click', resetGrid);

function createDivs (rows, columns) {
  container.innerHTML = " ";
  let amountOfDivs = rows*columns; 

  for (let i = 0 ; i < amountOfDivs ; i++) {
    let div = document.createElement('div');
    div.className = "box";
    container.appendChild(div);
  }
  gridTemplate(rows, columns);
  mouseOver();
}
// Changes the grid template according to the createDivs input.
function gridTemplate (rows, columns) {
  container.style.cssText = 'grid-template-rows: repeat(' + rows +  ', 1fr);';
  container.style.cssText = 'grid-template-columns: repeat('+ columns +', 1fr);';
}
// Invokes createDivs according to user prompt when the grid selector button is clicked.
function changeGrid () {
  let rows = window.prompt('Enter the new number of rows.');
  let columns = window.prompt('Enter the new number of columns.');
  createDivs (rows, columns);
}
// This function adds the active class when the mouse is over the box.
function mouseOver() {
  document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.classList.add('active');
    })
  })
}
function resetGrid () {
  document.querySelectorAll('.box').forEach(item => {
    item.classList.remove('active');
  })
}
