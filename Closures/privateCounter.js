function counter() {
  let privateCounter = 0;

  function incrementCounter() {
    privateCounter += 1;
  }

  function retriveCounter() {
    return privateCounter;
  }

  return {
    incrementCounter,
    retriveCounter,
  };
}

const newCounter = counter();

newCounter.incrementCounter();
console.log(newCounter.retriveCounter());
