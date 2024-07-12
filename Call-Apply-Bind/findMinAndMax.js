// Find minimum and maximum element of an array

const array = [1, 2, 3, 4, 5];

// Math.min(1,2,3,4) and Math.max(2,3,4,10) Math.min and max works only for the arguments passed and
// it does not work for arrays like Math.max(array) => o/p: NaN
// hence we can use apply here and pass our array as an argument which will turn the array as arguments internally when it calls Math.min/max function
console.log(Math.max.apply(null, array));
console.log(Math.min.apply(null, array));

// you can also use destructuring operator
console.log(Math.max(...array));
console.log(Math.min(...array));
