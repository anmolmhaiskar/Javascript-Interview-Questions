let isPass = false;
console.log(isPass.randomKey); // undefined

// internally isPass is converted into an Boolean object like this
// new Boolean(isPass).randomKey
// in javascript if we can't find any property then it returns undefined
// so this process of converting boolean value to a boolean object or primitive value to object
// at runtime is called "Boxing" and this helps javascript to dynamically deal with primitive and objects
// NOTE: the new Boolean(isPass) object later gets garbage collected once it is of no use

let str = "hi hello how are you?";
let strArray = str.split(" ");

str = strArray.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
console.log(str);
