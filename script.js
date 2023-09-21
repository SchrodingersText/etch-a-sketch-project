const gridContainer = document.querySelector(".grid-container");

function generateGrid(size, size) {
    size = parseInt(document.querySelector("#grid-size").value);
    const gridSize = size * size;
    const errorMsg = document.querySelector(".error-msg");
    errorMsg.textContent = "";

    if (size > 100) {
        errorMsg.textContent = "100 is the maximum size. Please enter a number less than or equal to 100.";
        size = 16;
    }
    
    for (let i = 1; i <= size; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);
    };

    for (let j = 1; j <= size; j++) {
        const rows = document.querySelectorAll(".row")
        rows.forEach(row => {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            row.appendChild(gridSquare);
        });
    }
    colorSelect()
};

generateGrid();

const randomColorButton = document.querySelector("#randomize-color");
let randomColor = false;
document.querySelector("#randomize-color").addEventListener("click", () => {
    randomColor = true;
});

function colorSelect() { 
    const grid = document.querySelectorAll(".grid-square")
    grid.forEach(div => {
        div.addEventListener("mouseover", () => {
            if (randomColor) {
              div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            } else {
             div.classList.add("hover");
            }
        }) 
    });
}

function clearGrid() {
    const rows = document.querySelectorAll(".row");
    const grid = document.querySelectorAll(".grid-square");
    grid.forEach(div => div.remove());
    rows.forEach(row => row.remove());
};

const resizeButton = document.querySelector("#resize-btn")
resizeButton.addEventListener("click", () => {
    clearGrid()
    generateGrid(); 
});