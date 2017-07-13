
function sumAll(arr) {
  // create an empty array  
  var numArr = []; 
  // get the smallest number from the array 
  var min = Math.min(arr[0], arr[1]);
  // get the largest number from the array 
  var max = Math.max(arr[0], arr[1]);

  // loop through the array and add the range of numbers between min 
  // ..and max to the numArr array
  for (var i = min; i <= max; i++) {
    numArr.push(i);
  }


  // return the sum of all numbers from the numArr array
  return numArr.reduce(function(a,b) {
    return a + b; 
  });

}

sumAll([1, 4]);
