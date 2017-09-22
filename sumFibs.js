
function sumFibs(num) {
  // Fibonacci numbers
  var fibs =  [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309];
  var odd = [];
  
  // loop through the fibs array; if the remainder of the fibonacci number is not equal to 0 
  // ...AND the fibonacci number <= to input number, add it to odd array 
  fibs.map(fib_num => (fib_num % 2 !== 0 && fib_num <= num) ? odd.push(fib_num) : false); 
  
  // return the sum of all odd Fibonacci numbers 
  return odd.reduce((a,b) => a + b);
}

sumFibs(5645636366);
