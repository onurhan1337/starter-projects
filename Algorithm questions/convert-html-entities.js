function convertHTML(str) {
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
  
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
  }
  
console.log(convertHTML("Adidas & Nike"));
console.log(convertHTML("Hamburgers < Pizza < Tacos")); 
console.log(convertHTML("Sixty > twelve")); 
console.log(convertHTML('Stuff in "quotation marks"')); 
console.log(convertHTML("Schindler's List")); 
console.log(convertHTML("<>")); 
console.log(convertHTML("abc")); 