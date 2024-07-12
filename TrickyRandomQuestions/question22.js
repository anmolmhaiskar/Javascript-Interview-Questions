const obj = Object.create(null);
const randomKey = "randomKey";

//TypeError: obj.hasOwnProperty is not a function (because obj={} is empty and it doesn't have hasOwnProperty function attached to it)
if (obj.hasOwnProperty(randomKey)) {
  console.log("Key Found");
} else {
  console.log("Key not found");
}

//Instead use hasOwn

if (Object.hasOwn(obj, randomKey)) {
  console.log("Key Found"); // Key not found
} else {
  console.log("Key not found");
}
