const gridContainer = document.querySelector(".grid-container");

function generateGrid() {
    for (let i = 1; i <= 256; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
     };
};

generateGrid();

const grid = document.querySelectorAll(".grid-square")

grid.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.classList.add("hover");
    });
});