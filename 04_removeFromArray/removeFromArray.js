const removeFromArray = function (
  array,
  itemToRemove,
  ...additionalItemsToRemove
) {
  let newArray = [];

  let args = Array.from(arguments).splice(1);
  console.log("args:" + args);

  for (let i = 0; i < array.length; i++) {
    let remove = false;
    for (let j = 0; j < args.length; j++) {
      if (array[i] === args[j]) {
        remove = true;
      }
    }
    if (!remove) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
