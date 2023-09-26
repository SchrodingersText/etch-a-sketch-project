const gridContainer = document.querySelector(".grid-container");

let isEventListenerActive = true;

document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        if (!isEventListenerActive) {
            isEventListenerActive = true;
            document.querySelector(".pause-msg").textContent = ""
        } else {
            isEventListenerActive = !isEventListenerActive;
            document.querySelector(".pause-msg").textContent = "Pen paused"
        }
    }
});

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

const defaultColorButton = document.querySelector("#default-color");
const randomColorButton = document.querySelector("#randomize-color");
const eraserButton = document.querySelector("#eraser");
let defaultColor = true;
let randomColor = false;
let eraseColor = false;
defaultColorButton.addEventListener("click", () => {
    defaultColor = true;
    randomColor = false;
    eraseColor = false;
    if (randomColorButton.classList.contains("selected")) {
        randomColorButton.classList.toggle("selected")
    } else if (eraserButton.classList.contains("selected")) {
        eraserButton.classList.toggle("selected")
    }
    defaultColorButton.classList.toggle("selected")
});
randomColorButton.addEventListener("click", () => {
    randomColor = true;
    defaultColor = false;
    eraseColor = false;
    if (defaultColorButton.classList.contains("selected")) {
        defaultColorButton.classList.toggle("selected")
    } else if (eraserButton.classList.contains("selected")) {
        eraserButton.classList.toggle("selected")
    }
    randomColorButton.classList.toggle("selected")
});
eraserButton.addEventListener("click", () => {
    eraseColor = true;
    defaultColor = false;
    randomColor = false;
    if (defaultColorButton.classList.contains("selected")) {
        defaultColorButton.classList.toggle("selected")
    } else if (randomColorButton.classList.contains("selected")) {
        randomColorButton.classList.toggle("selected")
    }
    eraserButton.classList.toggle("selected")
});

function colorSelect() { 
    const grid = document.querySelectorAll(".grid-square")
    grid.forEach(div => {
        div.addEventListener("mouseover", () => {
            if (randomColor && isEventListenerActive) {
              div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            } else if (isEventListenerActive) {
             div.style.backgroundColor = "white"
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