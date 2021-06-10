const colors = [
  generateColors(),
  generateColors(),
  generateColors(),
  generateColors(),
];
let count = 2;
const indexArray = [0, 1, 2, 3];
const circleArray = document.querySelectorAll(".circulos");
const singleCircle = getRandomSingleCircle(circleArray);
const bodyBackgroundColor = (document.querySelector(
  "#body"
).style.backgroundColor = "rgb(38, 38, 38)");
const guessResult = document.querySelector(".resultado");
const flush = document.querySelector(".flush");
let countElem = document.querySelector(".count");
countElem.innerHTML = count;
function countMinus() {
  console.log((count -= 1));
}

circleArray.forEach((circle) =>
  circle.addEventListener("click", function clickListener() {
    judge(circle);
    circle.removeEventListener("click", clickListener);
  })
);

flush.addEventListener("click", () => {
  generateColors();
  colorDistributor(circleArray);
  window.location.reload();
});

function colorPicked() {
  return colors.pop();
}

function generateColors() {
  const red = Math.floor(Math.random() * (256 - 50) + 50);
  const green = Math.floor(Math.random() * (256 - 50) + 50);
  const blue = Math.floor(Math.random() * (256 - 50) + 50);
  return `rgb(${red}, ${green}, ${blue})`;
}

function colorDistributor(circleArray) {
  circleArray.forEach(
    (circle) => (circle.style.backgroundColor = colorPicked())
  );
}

function getRandomSingleCircle(circleArray) {
  const index = Math.floor(Math.random() * 3);
  return circleArray[index];
}

function circleBackgroundColor(circle) {
  return circle.style.backgroundColor;
}

function showRgbOfTheTurn(result) {
  document.querySelector(".color-rgb").innerHTML = result;
}

function addClass(element, className) {
  return (element.className = className);
}

function judge(circle) {
  if (circleBackgroundColor(circle) === circleBackgroundColor(singleCircle)) {
    addClass(guessResult, "resultado");

    return (document.querySelector(".resultado").innerHTML = "Correct!");
  } else {
    circle.style.backgroundColor = bodyBackgroundColor;
    addClass(guessResult, "resultado");
    setTimeout(() => {
      addClass(guessResult, "new-result");
    }, 1500);
    return (document.querySelector(".resultado").innerHTML = "erooooou");
  }
}

colorDistributor(circleArray);
showRgbOfTheTurn(circleBackgroundColor(singleCircle));
