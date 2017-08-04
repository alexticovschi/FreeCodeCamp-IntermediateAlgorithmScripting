// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
// Return the rest of the array, otherwise return an empty array.


function dropElements(arr, func) {
  // Drop them elements.
  var args = Array.from(arguments);
  
  for (var i = 0; i < args[0].length; i++) {
    //console.log(func(args[0][i]));
    // if args[1] returns a true value
    if (args[1](args[0][i])) {
      console.log(i);
      // return the sliced array, starting to slice from the last returned i 
      return args[0].slice(i);
    }
  }
  // Otherwise return an empty array
  return [];

  
}

dropElements([1, 2, 3], function(n) {return n > 0;});
