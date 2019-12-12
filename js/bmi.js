const cm = document.querySelector(".cm");
const kg = document.querySelector(".kg");
const result = document.querySelector(".result");

function calculateBmi() {
  const parsedCm = parseFloat(cm.value);
  const parsedKg = parseFloat(kg.value);
  result.innerText = `${parsedKg / (parsedCm / 100) ** 2}`;
}

function init() {
  cm.addEventListener("input", calculateBmi);
  kg.addEventListener("input", calculateBmi);
}

init();
