console.log("Start");

// How promise works internally:
// https://www.freecodecamp.org/news/how-javascript-promises-actually-work-from-the-inside-out-76698bb7210b/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Promise is resolved successfully!");
    } else {
      reject("Promise is rejected");
    }
  }, 1000);
});
console.log(myPromise); //prints promise object with promise status/state

// Promise.then accepts two functions
// Promise.then(nFullfilled, onRejected)
// onFullfilled function gets the value we pass to resolve(val) when we call resolve
// onRejected function gets the value we pass to reject(val) when we call reject
myPromise.then(
  function onfullFilled(resolveVal) {
    console.log(resolveVal);
  },
  function onRejected(rejectVal) {
    console.log(rejectVal);
  }
);

// NOTE: you can replace these onfullFilledVal(val){} with arrow function like this (val)=>{} which everyone does these days
// with arrow functions
myPromise.then(
  (resolveVal) => {
    console.log(resolveVal);
  },
  (rejectVal) => {
    console.log(rejectVal);
  }
);

// but instead of getting Promise.then(onfullFilled onRejected) like this instead
// we can also just use only onfullFilled function in then and onRejected function we can use in catch exclusively to make code more readable
// so we can do like this Promise.then(function onfullFilled(val){<body>}).catch(function onRejected(val){<body>})
myPromise
  .then(function onfullFilled(resolveVal) {
    console.log(resolveVal);
  })
  .catch(function onRejected(rejectVal) {
    console.log(rejectVal);
  });

console.log("Code ends here..");
