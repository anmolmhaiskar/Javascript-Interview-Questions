// Freeze object i.e. no should be able to change the property of an object

const object = {
  name: "A",
  age: 10,
};

const nestedObject = {
  name: "Sherlock Holmes",
  age: 34,
  nestedObj: {
    phone: 91093049493,
    address: "221B Baker Street",
  },
};

function freeze(obj) {
  return Object.freeze(obj);
}

freeze(object);
object.age = 20;
console.log(object); // {name: "A", age: 10}

// But this does not work for nested objects
nestedObject.nestedObj.phone = 0;
console.log(nestedObject);

function freezeNestedObject(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      freezeNestedObject(obj[key]);
    }
  });
  return Object.freeze(obj);
}

freezeNestedObject(nestedObject);
nestedObject.nestedObj.phone = 918989204802;
console.log(nestedObject);

console.log(nestedObject);
