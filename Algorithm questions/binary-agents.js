function binaryAgent(str) {
  const binaryArray = str.split(' ');
  
  return binaryArray.map(binary => {
    const decimal = parseInt(binary, 2);
    
    return String.fromCharCode(decimal);
  }).join('');
}

console.log(binaryAgent("01001111 01101110 01110101 01110010 01101000 01100001 01101110 00100000 01000100 01100101 01101101 01101001 01110010"));
