function myPromise(executor) {
  let self = this;
  this.state = "pending";
  let isFullFilled = true,
    isCalled = false,
    onResolve,
    onReject,
    value = "";

  function resolve(val) {
    isFullFilled = true;
    self.state = "fullfilled";
    value = val;

    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }

  function reject(val) {
    isFullFilled = true;
    self.state = "rejected";
    value = val;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(val);
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    // if we immediately exexute resolve(val) (eg we remove setTimeout on line 58 and immediately call resolve("Pikaboo"))
    // then it's not a asynchronus code hence it immediatley executs and does not let the .then({ doResolve = callback })
    // execute and doReolve end up being just a normal variable hence we get unCaught exception: doResolve not a function.
    // Hence to solve this issue we used isFullfilled and iscalled variable which solve this issue here
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    onReject(value);
  }
}

const newPromise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pikaboo");
  }, 2000);
});

console.log(newPromise);

newPromise
  .then((res) => {
    console.log(res);
    console.log(newPromise); //to see the state variable of promise
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
