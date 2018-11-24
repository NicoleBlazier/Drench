// 1.
// Populate the box with a math.random color

const colors = ['#FFC0CB', '#FF0000','#800080', '#0000FF', '#008000', '#FFFF00' ]
const btnColor = document.getElementsByClassName('button');
console.log(btnColor);

for (let i=0; i< btnColor.length; i++) {
    console.log(btnColor.length)
    btnColor.style.backgroundColor = colors[i];
    console.log(colors[i]);
}

// Creates the Drench Game Cells 
function generateGrid(rows, cols) {
    var gameBoard = document.getElementById("drenchgame");
    
    var grid = "<table>";
    for (let row = 1; row <= rows; row++ ) {
        grid += '<tr>';
        for (let col = 1; col <= cols; col++ ) {     
            grid += '<td></td>';
        } 
        '<tr>';
    }
    gameBoard.innerHTML = grid;
    return gameBoard;
}

// Creates a random color for each cell and sets it
function getRandomColor() {
    var randColor =  colors[Math.floor(Math.random() * colors.length)];
    var cells = document.getElementsByTagName("td");
    // console.log(randColor);
    // console.log(cells);
    for (let i = 0; i <= cells.length; i++) {
            cells[i].style.backgroundColor = randColor;
    }
}


// Sets a random color to each cell


// function buttonColors(ind) {
    
//     // button.style.backgroundColor = colors[ind];
//     // button.dataset.color = ind;

// }
function setRandomColor() {
   
 
}





// 2.
// Select the left corner square
// Check the surrounding three square for matching colors
// If they match select square, if they do not do nothing
// (console.log the results)

// Push button with new color 
// Onclick button subtract from the tally
// Check all highlighted colors equals new color and change to new color
// Check the surrounding squares to match the new color
// If they match select square, if not do nothing


// 3. 
