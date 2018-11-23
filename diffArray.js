/* First Solution */ 
function diffArray(arr1, arr2) {
    var newArr = [];              
    // Use map() method to check if the values of arr1 are found in arr2
    arr1.map(function(val) {
    // if the value from arr1 is not found in arr2, add the value to the newArr array
      if (arr2.indexOf(val) === -1) {
        newArr.push(val);
      }
    });
  
    // do the same with arr2
    arr2.map(function(val) {
      if (arr1.indexOf(val) === -1) {
      newArr.push(val);
    }
 });
  
 return newArr;
}

/* Second Solution */
function diffArray2(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  
  return newArr.filter((val) => arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1);
}

/* Third Solution */
function diffArray3(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) === -1 || arr2.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
