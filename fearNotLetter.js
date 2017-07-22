
// *** CODE EXPLAINED ***

// if the string has a value of 'abce' and we loop through this string, 
// str.charCodeAt(i)  will return 97, 98 and 99
// For example 'a'.charCodeAt(0) returns 97, 'b'.charCodeAt(0) returns 98 etc.
// 'str.charCodeAt(i + 1) - str.charCodeAt(i)' will return 98 - 97, 99 - 98 and 101 - 99
// because 101 - 99 is not equal to 1, it will return 100 ('i' value will be 99 + 1) which 
// is the Unicode or numeric value for letter 'd', the MISSING LETTER.


function fearNotLetter(str) { 
   // loop through the array as long as i is less than the str.length - 1
   for (var i = 0; i < str.length - 1; i++) {
 	  // and if this test is not equal to 1	 
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      	// return the missing letter
        return String.fromCharCode(str.charCodeAt(i) + 1);
      } 
   } 
}


fearNotLetter("abce");
