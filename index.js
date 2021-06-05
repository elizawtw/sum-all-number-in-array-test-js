
const sumItems = function(array) {
  let result = 0;
  if (typeof array === 'number') {
    return array;
    
  } else if (array instanceof Array) {
    array.forEach((elem) => {
      result += sumItems(elem);
    });
    
  }return result;
}

module.exports = sumItems;