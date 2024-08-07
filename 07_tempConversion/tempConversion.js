const convertToCelsius = function (farenheitDegrees) {
  return Math.round((((farenheitDegrees - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (CelsiusDegrees) {
  return Math.round(((CelsiusDegrees * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
