// what is call?

var obj = { name: "Anmol" };

function sayHello(age, profession) {
  return "Hello " + this.name + ", You are " + age + " years old " + profession;
}

console.log(sayHello.apply(obj, [24, "Software Engineer"])); //functionName.call(object, arg1, arg2, arg3) call is used to reuse the functions with different object context
