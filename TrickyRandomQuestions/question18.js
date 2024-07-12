function func1(a, b, ...rest) {}

function func2(a, b = 0, c) {}

console.log(func1.length); //2 (rest/spread operators are not counted in length property of a functiom)
console.log(func2.length); //1 (if we assign default value to a parameter than all the parameters from that parameter will not be counted in length)
