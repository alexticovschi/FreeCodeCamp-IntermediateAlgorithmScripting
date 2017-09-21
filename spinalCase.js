
function spinalCase(str) {
  // replace all non alpha numeric characters with empty space, add a space before every uppercase       // character, trim off the leading and trailing spaces and then replace multiple spaces with a 
  // single space
  str = str.replace(/[\W_]+/g," ").replace(/([A-Z])/g, ' $1').trim().replace(/  +/g, ' ');
  // regex that matches empty spaces
  var patt1 = /\s/g;
  
  // if the string contains empty spaces
  if(str.match(patt1)) {
     // replace every empty space with '-' and convert the string to lower case
     str = str.replace(patt1, "-").toLowerCase();
  } 
  
  return str;
}

spinalCase('AllThe-small Things');
