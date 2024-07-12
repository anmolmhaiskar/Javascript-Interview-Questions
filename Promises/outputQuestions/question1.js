// When you create a new promise with the new keyword,
// a promise object is returned immediately.
// This object represents the eventual completion (or failure) of an asynchronous operation.
// The executor function passed to the Promise constructor is executed synchronously,
// but the promise itself is returned before the executor function completes.

// Question:
// since the code inside the executor function executes synchronously
// can we say that promises are not asynchronous? what is asynchronous in promise then?

// Answer:
// Promises themselves are not inherently asynchronous.
// Rather, they are a way to handle asynchronous operations and manage the resulting state transitions (pending, fulfilled, rejected).
// The executor function of a promise runs synchronously, but it typically contains asynchronous operations.
// Promises provide a more structured and manageable way to work with these asynchronous operations.

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2); //Remove this line and it will make a new output question
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
