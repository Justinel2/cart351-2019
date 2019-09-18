//
let count = 0;
let leftSide;
let rightSide;


window.onload=function(){
  leftSide = document.getElementById("left");
  rightSide = document.getElementById("right");
  leftSide.addEventListener("click", back);
  rightSide.addEventListener("click", next);
  document.getElementsByClassName("side")[0].addEventListener("click", hide);
}

// document.getElementsByClassName("side").addEventListener("click", hide);

function back() {
  if (count > 0) {
    count -= 1;
    document.getElementById(count).style.diplay = 'none';
  }
  console.log(count);
}

function next() {
  if (count < 6) {
    count += 1;
  }
  console.log(count);
}

function hide() {
  document.getElementById(count).style.display = 'none';
  console.log("hellooooo");
}
