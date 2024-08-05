const reverseString = function(string) {

    let reversedString = "";
    let substraction = 1;

    for (let index = 0; index < string.length; index++) {
        reversedString += string[string.length-substraction];
        substraction++;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
