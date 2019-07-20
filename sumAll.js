/*** Sum All Numbers in a Range ***/

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.



/* Third Solution */

function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let total = 0;

  for (let i = min; i <= max; i++) {
      total += i;
  }

  return total;
}

/********************************************************************************/

/* Second Solution */

function sumAll(arr) {
  const sortedArray = arr.sort((a,b) => a - b);
  const lastNum = sortedArray[sortedArray.length-1];
  let total = 0;

  for (let i = sortedArray[0]; i <= lastNum; i++) {
      total += i;
  }

  return total;
}


/********************************************************************************/


/* First Solution */

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
