
function booWho(bool) {
  // return 'true' if the value of bool is true or false, otherwise return false
  // return bool === true || bool === false;
  
  // if typeof bool is a boolean, return true, otherwise return false
  return typeof(bool) === "boolean" || typeof(bool) === false;
}

booWho(null);
