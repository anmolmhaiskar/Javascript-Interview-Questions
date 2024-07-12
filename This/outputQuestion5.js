// Question: create an object calculator?
//calculator.read(a, b)
//calculator.add()
//calculator.mul()

// const calculator = {
//   // ... your code
// }

const calculator = {
  value: 0,
  read(a, b) {
    this.a = +prompt("Enter value of a: ", 0);
    this.b = +prompt("Enter value of b: ", 0);
    return this;
  },
  add() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(1, 2);
console.log(calculator.add());
console.log(calculator.mul());
