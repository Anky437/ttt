// let us set up acess points for out objects using dom 

//for boxes
let boxes = document.querySelectorAll(".box");

// for reset button
let resetBtn = document.querySelectorAll("#reset-btn");

// creating a variable to track turn
let turnO = true; //agar true toh O wale player ki baari and false toh X wale

// storing the winning patterns:(using 2D array)
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// creating event listeners for click of button ke consequence
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
        }
    });
});