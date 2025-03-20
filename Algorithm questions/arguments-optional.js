function addTogether() {
  const [first, second] = arguments;
  
  if (typeof first !== 'number') {
    return undefined;
  }
  
  if (arguments.length === 1) {
    return function(second) {
      if (typeof second !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  
  if (typeof second !== 'number') {
    return undefined;
  }
  
  return first + second;
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("2", 3));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
