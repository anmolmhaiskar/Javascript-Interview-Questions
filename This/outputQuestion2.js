// Question: What is the result of accessing its ref? why?

function makeUser() {
  return {
    name: "John",
    ref: this, //this -> window
  };
}
let user = makeUser();
console.log(user.ref.name); //what's the result?

// if you want to make ref point to current object then do this

function makeUser2() {
  return {
    name: "John",
    ref: function () {
      return this; //this -> object["John", ref:func]
    },
  };
}
let user2 = makeUser2();
console.log(user2.ref().name);
