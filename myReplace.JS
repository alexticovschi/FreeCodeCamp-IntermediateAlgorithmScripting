
function myReplace(str, before, after) {
  
  // if the first letter of the word to be replaced is uppercase
  if ( before[0] === before[0].toUpperCase() ) {
    // capitalize only the first letter and let the following letters be lowercase
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 
  // replace 'before' string with 'after' string
  return str.replace(before, after);

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
