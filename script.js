let container = document.getElementById('container');

function createDivs (rows, columns) {
  let amountOfDivs = rows*columns;
  
  
  for (let i = 0 ; i < amountOfDivs ; i++) {
    let div = document.createElement("div");
    div.className = "box";
    container.appendChild(div);

  }

  container.style.cssText = 'grid-template-rows: repeat(' + rows +  ', 1fr);';
  container.style.cssText = 'grid-template-columns: repeat('+ columns +', 1fr);';

}
