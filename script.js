const gridContainer = document.querySelector(".grid-container");

window.onload = function() {
   for (let i = 1; i <= 256; i++) {
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridContainer.appendChild(gridSquare);
   };
};
