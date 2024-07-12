// what is call?

var obj = { name: "Anmol" };

function sayHello(age, profession) {
  return "Hello " + this.name + ", You are " + age + " years old " + profession;
}

//bind function binds the object with the function and returns a new function whose "this"
// points to the object you passed in the argument
const bindFunc = sayHello.bind(obj);

console.log(bindFunc(20, "Lawyer"));
console.log(bindFunc(30, "Civil Engineer"));
console.log(bindFunc(28, "Architect"));
