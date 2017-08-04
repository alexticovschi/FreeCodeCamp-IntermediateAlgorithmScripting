// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  // The every() method tests whether all elements in the array pass the test implemented by the provided function.
  // iterate over the objects from the collection array and check every value of every key that's inside
  // basically it will check every key-value pair from the collection array
  return collection.every(function(obj) {
    // check if the objects "pre" key has a non-falsy object
    // if it passes the test it will return true, otherwise it will return false
    //console.log(obj[pre]);
    return obj[pre];
  });


  
  
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
