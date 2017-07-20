function translatePigLatin(str) {
  // vowels array to hold all the vowels
  var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  
  // if vowels array contains the first letter of the specified word
  if (vowels.includes(str.charAt(0))) {
    // return the word and attach "way" to it
    return str += "way";
    // else, if the first letter of the word is not found in vowels array
    // and the word does not start with 'gl'
  } else if(!vowels.includes(str.charAt(0)) && (str.slice(0,2) !== "gl")) {
    // slice a part of the word not including the first letter, add the first letter
    // to the end of the word, and then attach the 'ay' string to it;
    return str.slice(1) + str[0] + "ay";
  } else  {
    // else remove the first two letters of the word, then add it to the end 
    // of the remained word, and attach the 'ay' string to it;
    return str.substr(2) + str.slice(0,2) + "ay";
  }
  
}

translatePigLatin("california");
