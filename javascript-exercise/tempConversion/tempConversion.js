const ftoc = function(tempFarenheit) {
  let tempCelsius = (tempFarenheit - 32) * (5 / 9);

  return Math.round(tempCelsius * 10) / 10;
};

const ctof = function(tempCelsius) {
  let tempFarenheit = tempCelsius * (9 / 5) + 32;

  return Math.round(tempFarenheit * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
