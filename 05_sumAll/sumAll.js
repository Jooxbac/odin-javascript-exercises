const sumAll = function (firstNumber, secondNumber) {
  let sum = 0;

  //some param is negative, not an integer or not a number
  if (
    firstNumber < 0 ||
    secondNumber < 0 ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    typeof firstNumber != "number" ||
    typeof secondNumber != "number"
  ) {
    return "ERROR";
  }

  //allows for loop to work properly with the range
  if (firstNumber <= secondNumber) {
    startNumber = firstNumber;
    endNumber = secondNumber;
  } else {
    startNumber = secondNumber;
    endNumber = firstNumber;
  }

  for (let index = startNumber; index < endNumber + 1; index++) {
    sum += index;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
