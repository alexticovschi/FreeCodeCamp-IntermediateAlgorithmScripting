function sumPrimes(num) {
  // array to hold prime numbers
  var primes = [];
  
  // this function generates prime numbers from a given number
  // and adds the prim number to primes array
  function getPrimes(num) {
  	for (var i = 2; i <= num; i++) {
  		for (var j = 2; j <= i; j++) {
            // if the remainder of i % j is equal to 0, break out of the loop
            // no prime number found 
  			if (i % j === 0) {
  				break;
  			}
  		}
        // if i is equal to j, prime number found
  		if (i === j) {
            // add it to primes array
  			primes.push(i);
  		}
    }
  }
  
  // call the getPrimes function
  getPrimes(num);
  
  // return the sum of prime numbers usinf the reduce() method
  return primes.reduce(function(a,b) { return a + b; });
}

sumPrimes(10);
