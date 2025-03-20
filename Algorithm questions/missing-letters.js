function findMissingLetter(str) {
  const charCodes = str.split('').map(char => char.charCodeAt(0));
  
  for (let i = 1; i < charCodes.length; i++) {
    if (charCodes[i] - charCodes[i-1] > 1) {
      return String.fromCharCode(charCodes[i-1] + 1);
    }
  }
  
  return undefined;
}

console.log(findMissingLetter("abce"));        
console.log(findMissingLetter("abcdefghjklmno")); 
console.log(findMissingLetter("bcdf"));        
console.log(findMissingLetter("xyz"));         
