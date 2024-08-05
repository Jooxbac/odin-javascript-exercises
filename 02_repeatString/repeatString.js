const repeatString = function (string, num) {
  let repeatedString = "";
  if(num>=0){
    for (let index = 0; index < num; index++) {
        repeatedString += string;
      }
      return repeatedString;
  }else{
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
