import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  let filled = document.querySelectorAll(".filledSquare");
  let stuff = Array.from(filled);
  for (let i = 0; i < stuff.length; i++) {
    stuff[i].classList.toggle("filledSquare");
  }
});

let totalWidth = 610;

let determinedSize = input => {
  let singleWidth = totalWidth / input;

  return String(singleWidth) + "px";
};

let numberPerRow = prompt("How many squares per side would you like?");

if (typeof numberPerRow != "number") {
  alert("Input incorrect");
  let numberPerRow = prompt("How many squares per side would you like?");
}

let totalSquares = () => numberPerRow * numberPerRow;

window.onload = function() {
  let sketch = document.querySelector("#sketch");
  for (var i = 0; i < totalSquares(); i++) {
    const div = document.createElement("div");
    div.style.width = `${determinedSize(numberPerRow)}`;
    div.style.height = `${determinedSize(numberPerRow)}`;
    div.classList.add("emptySquare");
    div.addEventListener("mouseover", e => {
      e.target.classList.add("filledSquare");
    });
    sketch.appendChild(div);
  }
};

let randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

let fun = document.querySelector("#funcolors");
fun.addEventListener("click", () => {
  let filled = document.querySelectorAll(".filledSquare");
  let stuff = Array.from(filled);
  for (let i = 0; i < stuff.length; i++) {
    stuff[i].classList.toggle("filledSquare");
  }

  let empty = document.querySelectorAll(".emptySquare");
  let newStuff = Array.from(empty);
  for (let i = 0; i < newStuff.length; i++) {
    newStuff[i].addEventListener("mouseover", e => {
      e.target.style.backgroundColor = `rgb(${randomNumber() +
        "," +
        randomNumber() +
        "," +
        randomNumber()})`;
    });
  }
});
