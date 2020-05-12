let container = document.getElementById('container');
createDivs(16,16);
let gridButton = document.getElementById('grid-selector');
let resetButton = document.getElementById('reset');
let colorButton = document.getElementById('colorize');
let blackButton = document.getElementById('black');
let eraseButton = document.getElementById('erase');

gridButton.addEventListener('click', changeGrid);
resetButton.addEventListener('click', resetGrid);
colorButton.addEventListener('click', randomColor);
blackButton.addEventListener('click', blackBox);
eraseButton.addEventListener('click', eraseBox);


// Creates divs and append them to the container.
function createDivs (rows, columns) {
  container.innerHTML = " ";
  let amountOfDivs = rows*columns; 

  for (let i = 0 ; i < amountOfDivs ; i++) {
    let div = document.createElement('div');
    div.className = "box";
    container.appendChild(div);
  }
  gridTemplate(rows, columns);
  blackBox();
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

// Resets the grid establishing all the box to white and returning to black boxes.

function resetGrid () {
  let boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.cssText = 'background-color: rgb(255, 255, 255);';
  }
  blackBox();
}


// Erases the color changing it to white.

function eraseBox () {
  let boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onmouseover = function(e) {
        this.style['background-color'] = 'rgb(255, 255, 255)';
    }  
  }
  
}

//Define a random color to the boxes.
function randomColor () {
  let boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onmouseover = function(e) {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['background-color'] = color;
    }  
  }
}

//Return black color to the boxes.
function blackBox () {
  let boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onmouseover = function(e) {
        this.style['background-color'] = 'black';
    }  
  }
}