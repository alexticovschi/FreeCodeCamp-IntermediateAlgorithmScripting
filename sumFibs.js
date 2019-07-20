// Given a positive integer num, return the sum of all odd Fibonacci numbers that 
// are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
// number in the sequence is the sum of the two previous numbers. The first six numbers 
// of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
//  than or equal to 10 are 1, 1, 3, and 5

/* Second version with filter and reduce */
function sumFibs(num) {
    const fibs = [1, 1];

    for (let i = 1; i <= num; i++) {
        fibs.push(fibs[i - 1] + fibs[i]);
    }

    return fibs.filter(n => {
        if (n <= num) {
            return n % 2 !== 0;
        }
    }).reduce((total, n) => total + n);
}

sumFibs(4);

/#######################################################/ 

/* First version */
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
