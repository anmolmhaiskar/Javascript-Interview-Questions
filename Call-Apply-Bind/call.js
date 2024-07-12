// what is call?

var obj = { name: "Anmol" };

function sayHello(age) {
  return "Hello " + this.name + ", Your age is " + age;
}

console.log(sayHello.call(obj, 24)); //functionName.call(object, arg1, arg2, arg3) call is used to reuse the functions with different object context
