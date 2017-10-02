
function addTogether() {
  // convert arguments to an array of arguments
  var args = Array.from(arguments);
  // check if the first(args[0]) and the second(args[1]) argument are numbers
  var a = checkIfNum(args[0]);
  var b = checkIfNum(args[1]);
    
  // function to check if the provided argument is a number
  function checkIfNum(val) {
    return typeof val === 'number' ? val : undefined;
  }
  
  // if the length of args is equal to 2
  if (args.length === 2) {
    // and if both arguments are numbers return the sum of args, else return undefined
    return a && b ? a + b: undefined;
  } else {
      // else, if a is a number, create a function to take the second argument 
      // and use recursion to return the sum of args(a and b); 
      if (a) {
        var add = function(b) {
          return addTogether(a, b);
         };
        return add;
      }
  }
}

addTogether(2,3);
