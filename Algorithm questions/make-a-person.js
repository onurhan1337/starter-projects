const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + this.getLastName();
  };

  this.setLastName = function(last) {
    fullName = this.getFirstName() + " " + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person("Onurhan Demir");
console.log(bob.getFullName()); 
bob.setFirstName("Onur");
console.log(bob.getFirstName()); 
console.log(bob.getFullName()); 
