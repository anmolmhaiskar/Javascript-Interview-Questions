console.log("start");

const promise1 = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });
};

console.log("middle");

promise1().then((res) => {
  console.log(res);
});

console.log("end");

// start -> middle -> 1 -> 3 -> end -> 2
// middle prints before 1 because promise1() function is called after log(middle)
