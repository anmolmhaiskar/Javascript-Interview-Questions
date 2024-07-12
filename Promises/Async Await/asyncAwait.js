const executeFirst = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed First");
      } else {
        reject(new Error("Failed to execute first"));
      }
    }, 3000);
  });
};

const executeSecond = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed Second");
      } else {
        reject(new Error("Failed to execute second"));
      }
    }, 5000);
  });
};

const executeThird = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed Third");
      } else {
        reject(new Error("Failed to execute third"));
      }
    }, 8000);
  });
};

const asyncFunc = async () => {
  try {
    const output1 = await executeFirst(true);
    console.log(output1); //Executed first (after 3s)

    const output2 = await executeSecond(true);
    console.log(output2); //Executed second (after 5s)

    const output3 = await executeThird(true);
    console.log(output3); //Executed first (after 8s)
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();

// step 1 :call stack suspend the execution of the async fuction where it find the await keyword until promise is settled with either resolved or rejected
// step 2: and until the javascript engine will execute the other code except the function with await
// step 3: below code demonstrates that when we await for executeFirst(true) in the asyncFunc in above code the js engine executes abc function until the executeFirst is not settled
// step 4: and then js suspends the execution of abc() function when it comes across await for dummyPromise(true) function
// step 5: and then once executeFirst() resolves callstack will have the asyncFunc() in callstack and the code executes
// Repeats step 1-5 again

const dummyPromise = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Dummy Promise");
      } else {
        reject(new Error("Failed to execute first"));
      }
    }, 10000);
  });
};

async function abc() {
  const output1 = await dummyPromise(true);
  console.log("ABC: ", output1); //Executed first (after 3s)
}
abc();
