const kilograms = document.querySelector(".inputKilograms");
const grams = document.querySelector(".inputGrams");
const pounds = document.querySelector(".inputPounds");

function convertKilograms() {
  const parsed = parseFloat(kilograms.value);
  grams.value = `${parsed * 1000}`;
  pounds.value = `${parsed * 2.2046}`;
}

function convertGrams() {
  const parsed = parseFloat(grams.value);
  kilograms.value = `${parsed / 1000}`;
  pounds.value = `${parsed * 0.0022046}`;
}

function convertPounds() {
  const parsed = parseFloat(pounds.value);
  kilograms.value = `${parsed / 2.2046}`;
  grams.value = `${parsed / 0.0022046}`;
}

function init() {
  kilograms.addEventListener("input", convertKilograms);
  grams.addEventListener("input", convertGrams);
  pounds.addEventListener("input", convertPounds);
}

init();
