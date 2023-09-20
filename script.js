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

    const grid = document.querySelectorAll(".grid-square")

    grid.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.classList.add("hover");
        });
    });
};

generateGrid();

function clearGrid() {
    const rows = document.querySelectorAll(".row");
    const grid = document.querySelectorAll(".grid-square");
    grid.forEach(div => div.remove());
    rows.forEach(row => row.remove());
};

const resizeButton = document.querySelector("#resize-btn")
const gridHeight = document.querySelector("#grid-height")
const heightInput = parseInt(document.querySelector("#grid-size").value)
const widthInput = parseInt(document.querySelector("#grid-size").value);
resizeButton.addEventListener("click", () => {
    clearGrid()
    generateGrid(heightInput, widthInput)
})