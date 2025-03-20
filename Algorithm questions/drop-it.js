function dropElements(arr, func) {
  const result = [...arr];
  
  const index = result.findIndex(func);
  
  if (index === -1) {
    return [];
  }

  return result.slice(index);
}

console.log(dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
})); 

console.log(dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
})); 

console.log(dropElements([1, 2, 3], function(n) {
  return n > 5;
}));
