const quickSort = (array) => {
  if (array.length <= 1 ) {
    return array;
  }
  else {
    var pivot = array[0];
    var smallerArray = [];
    var biggerArray = [];
    for (var int = 1; int < array.length; int++) {
      if (array[int] > pivot) {
        biggerArray.push(array[int]);
      } else {
        smallerArray.push(array[int]);
      }
    }

    return quickSort(smallerArray).concat(pivot, quickSort(biggerArray));
  }

}

module.exports = quickSort;