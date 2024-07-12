const promise = new Promise((_, reject) => {
  reject("Promise Rejected");
});

const res = promise
  .then((data) => {
    console.log("");
  })
  .catch((data) => {
    console.log(data); // Promise Rejected
  })
  .then((data) => {
    console.log("then after catch"); // then after catch
  });
