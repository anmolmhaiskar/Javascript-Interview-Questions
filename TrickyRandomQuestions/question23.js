// const obj = Object.create(null); // when you create object like this it does not attach prototype to the object
const obj = {}; // when you create object like this it attaches prototype to the object
const randomKey = "constructor";
console.log(obj);

if (randomKey in obj) {
  // if does not find the key in the object it goes to the prototype chain and there it can find "constructor" key
  console.log("Key Found");
} else {
  console.log("Key not found");
}

//Instead use hasOwn

if (Object.hasOwn(obj, randomKey)) {
  console.log("Key Found");
} else {
  console.log("Key not found"); // Key not found
}
