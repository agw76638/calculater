const celsius = document.querySelector(".inputCelsius");
const fahrenheit = document.querySelector(".inputFahrenheit");
const kelvin = document.querySelector(".inputKelvin");

function convertCelsius() {
  const parsed = parseFloat(celsius.value);
  fahrenheit.value = `${parsed * 1.8 + 32}`;
  kelvin.value = `${parsed + 273.15}`;
}

function convertFahrenheit() {
  const parsed = parseFloat(fahrenheit.value);
  celsius.value = `${(parsed - 32) / 1.8}`;
  kelvin.value = `${(parsed - 32) / 1.8 + 273.15}`;
}

function convertKelvin() {
  const parsed = parseFloat(kelvin.value);
  celsius.value = `${parsed - 273.15}`;
  fahrenheit.value = `${(parsed - 273.15) * 1.8 + 32}`;
}

function init() {
  celsius.addEventListener("input", convertCelsius);
  fahrenheit.addEventListener("input", convertFahrenheit);
  kelvin.addEventListener("input", convertKelvin);
}

init();
