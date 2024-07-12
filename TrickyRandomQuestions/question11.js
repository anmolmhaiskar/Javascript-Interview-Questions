function multiply(num1, num2) {
  //This changes the inbuilt arguments array value
  num1 = 100;
  num2 = 200;
  return arguments[0] * arguments[1];
}

console.log(multiply(10, 20)); //2000
