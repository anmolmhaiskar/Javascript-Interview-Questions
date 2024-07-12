const arr = [1, 2, 3, 4, 5];

// 1. Filter odd numbers
// 2. Square Each Number
// Give possible 2 solutions

console.log(arr.filter((num) => num % 2 !== 0).map((num) => num * num));

console.log(arr.flatMap((num) => (num % 2 !== 0 ? num * num : []))); // if we retirn empty array in flatmap then that value is discared hence we returned [] to ignore even numbers
