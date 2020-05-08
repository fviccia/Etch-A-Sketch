let container = document.getElementById('container');

function createDivs (rows, columns) {
  container.innerHTML = " ";
  let amountOfDivs = rows*columns; 

  for (let i = 0 ; i < amountOfDivs ; i++) {
    let div = document.createElement("div");
    div.className = "box";
    container.appendChild(div);
  }
  gridTemplate(rows, columns);
}

function gridTemplate (rows, columns) {
  container.style.cssText = 'grid-template-rows: repeat(' + rows +  ', 1fr);';
  container.style.cssText = 'grid-template-columns: repeat('+ columns +', 1fr);';
}