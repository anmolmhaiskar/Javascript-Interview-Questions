const arr = [{}, 2, "Hello"];

delete arr[1];

console.log(arr.length); //3
console.log(arr); // [ {}, <1 empty item>, 'Hello' ]
