function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) {
      return false;
    }
  }
  return true;
}

console.log(truthCheck([
  { user: "Tinky-Winky", sex: "male" },
  { user: "Dipsy", sex: "male" },
  { user: "Laa-Laa", sex: "female" },
  { user: "Po", sex: "female" }
], "sex")); 

console.log(truthCheck([
  { user: "Tinky-Winky", sex: "male" },
  { user: "Dipsy" },
  { user: "Laa-Laa", sex: "female" },
  { user: "Po", sex: "female" }
], "sex")); 

console.log(truthCheck([
  { user: "Tinky-Winky", sex: "male", age: 0 },
  { user: "Dipsy", sex: "male", age: 3 },
  { user: "Laa-Laa", sex: "female", age: 5 },
  { user: "Po", sex: "female", age: 4 }
], "age")); 
