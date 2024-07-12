const person = { name: "Anmol" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 20)); // Anmol is 20
console.log(sayHi.bind(person, 30)); // Function sayHi{<function body>} will be printed
