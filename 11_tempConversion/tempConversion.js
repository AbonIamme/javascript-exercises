const convertToCelsius = function(fahrenheit) {
  return Math.round(((5/9) * (fahrenheit - 32)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((32 + (celsius * (9/5))) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
