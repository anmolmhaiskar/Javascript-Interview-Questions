// sort array based on age

const arr = [
  { name: "A", age: 1 },
  { name: "B", age: 8 },
  { name: "C", age: 5 },
  { name: "D", age: 3 },
  { name: "E", age: 4 },
];

arr.sort(function (curr, next) {
  if (curr.age < next.age) {
    return -1;
  }

  if (curr.age > next.age) {
    return 1;
  }

  return 0;
});

console.log(arr);

// output
// [
//     { name: 'A', age: 1 },
//     { name: 'D', age: 3 },
//     { name: 'E', age: 4 },
//     { name: 'C', age: 5 },
//     { name: 'B', age: 8 }
//   ]
