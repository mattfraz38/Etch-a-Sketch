const ROWS = 16;
const COLUMNS = 16;
const BOARD_SIZE = "35px";
// const CELL_HEIGHT = "35px";
// const CELL_WIDTH = "35px";
let container = document.querySelector(".container");
const clearBoardButton = document.querySelector("#clear");
const gridSize = document.querySelector("#grid-size");

function setDrawingBoard(size = BOARD_SIZE) {
  for (let i = 0; i < ROWS; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: flex;");

    for (let j = 0; j < COLUMNS; j++) {
      let column = document.createElement("div");

      column.style.boxSizing = "border-box";
      column.style.borderTop = "1px solid black";
      column.style.borderLeft = "1px solid black";
      column.style.height = size;
      column.style.width = size;

      if (i === ROWS - 1) column.style.borderBottom = "1px solid black";
      if (j === COLUMNS - 1) column.style.borderRight = "1px solid black";

      column.style.border = row.appendChild(column);
    }
    container.appendChild(row);
  }
  return container;
}


let board = setDrawingBoard();

// cannot move, board must be created before mouse events can happen
let drawingBoard = document.querySelectorAll(".container div");


drawingBoard.forEach(div => {
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});



clearBoardButton.addEventListener("click", () => {
  drawingBoard.forEach((div) => {
    div.style.backgroundColor = "white";
  });
});


gridSize.addEventListener("click", () => {
  board.remove();
  let size = prompt("Pick a number between 1 an 100", 35);

  size += "px"
  console.log(size);

  container.remove();

  let newContainer = document.createElement("div");
  newContainer.classList.add("container");

  container = newContainer;

  document.body.appendChild(newContainer);
  setDrawingBoard(size);
  let newDrawingBoard = document.querySelectorAll(".container div");
  drawingBoard = newDrawingBoard;

  newDrawingBoard.forEach(div => {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
});