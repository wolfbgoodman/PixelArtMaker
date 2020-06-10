const color = document.querySelector("#colorPicker");
const grid = document.querySelector("#pixelCanvas");
document.querySelector("[type='submit']").addEventListener("click", makeGrid);

function makeGrid(event) {
  // grid needs to be empty before function creates new grid
  grid.innerHTML = "";
  // get user inputs
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  event.preventDefault();
  // loop through input values to create the grid
  for (let i = 0; i < height; i++) {
    const row = grid.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
    }
  }
  // fire background coloring as soon as user clicks a cell
  document.querySelector("#pixelCanvas").addEventListener("click", function(e) {
    if(e.target.nodeName == "TD") {
        e.target.style.backgroundColor = color.value;
      }
  });
}
