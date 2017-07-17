
function whatIsInAName(collection, source) {
  
  // get the key value(s) of the source object
  // Object.keys() returns an array whose elements are strings corresponding
  // to the enumerable keys found in an object.
  var sourceKeys = Object.keys(source);

  
  // The hasOwnProperty() method returns a boolean indicating whether 
  // the object has the specified property
  return collection.filter(function(obj) {
    // for every key from sourceKeys array
    return sourceKeys.every(function(key) {
       // if the object from the collection array has the key(s) stored in
       // sourceKeys array and if the object keys are the same as the source keys,
       // filter only that objects that satisfy this criteria
       return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    });
  });
  
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
