function lastIndexOf (series, num){
  var foundMatch = false;
  var result = 0
  for (var i = (series.length - 1); i > -1; i--){
    if (series [i]=== num){
      foundMatch = true;
      result = i;
      break;
      return result;
    }
  }
  if (foundMatch){
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);