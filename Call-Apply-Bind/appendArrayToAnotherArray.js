// Append an array to another array

const array1 = ["a", "b"];
const array2 = [1, 2, 3];

array1.push.apply(array1, array2);

console.log(array1);
