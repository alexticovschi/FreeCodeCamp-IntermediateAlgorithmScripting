function binaryAgent(str) {
// convert the string into an array of binary digits
//  var binary = str.split(' ');
//   var digits = [];
  
//   binary.map(function(nums) {
//     digits.push(parseInt(nums, 2));
//   });
  
//   return digits.map(function(digit) {
//     return String.fromCharCode(digit);
//   }).join('');
  //console.log(binary);
  
  // convert the string into an array of binary digits
  var binary = str.split(' ');
  
  // iterate over the array, convert every 'binary' string into a decimal using the parseInt() method
  // then convert every ASCII number(decimal) into a letter and return the string using the join() method
  return binary.map(function(num) {
    //console.log(String.fromCharCode(parseInt(num, 2)));
    return String.fromCharCode(parseInt(num, 2));
  }).join('');
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
