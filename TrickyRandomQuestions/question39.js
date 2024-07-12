console.log(typeof String("")); // String
console.log(typeof new String("")); //Object

function String2() {
  if (new.target) {
    return new String("");
  }
  return String("");
}

console.log(typeof String2("")); // String
console.log(typeof new String2("")); //Object
