const colors = [
  generateColors(),
  generateColors(),
  generateColors(),
  generateColors(),
];
const indexArray = [0, 1, 2, 3];
const circleArray = document.querySelectorAll(".circulos");
const singleCircle = getRandomSingleCircle(circleArray);

circleArray.forEach((circle) =>
  circle.addEventListener("click", () => {
    judge(circle);
  })
);

function colorPicked() {
  return colors.pop();
}

function generateColors() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
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

function judge(circle) {
  if (circleBackgroundColor(circle) === circleBackgroundColor(singleCircle)) {
    console.log(circle);
    return (document.querySelector(".resultado").innerHTML = "acertou");
  } else {
    circle.style.backgroundColor = "red"; // mudar a cor para o background
    return (document.querySelector(".resultado").innerHTML = "errou porra");
  }
}

colorDistributor(circleArray);
showRgbOfTheTurn(circleBackgroundColor(singleCircle));
