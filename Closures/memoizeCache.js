function memoize(func, context = this) {
  const res = {};
  return function (...args) {
    const argssString = JSON.stringify(args);
    console.log("args: ", args);
    if (!res[argssString]) {
      res[argssString] = func.call(context, ...args);
    }
    return res[argssString];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const clumsySquareMemoize = memoize(clumsySquare);

console.time("First call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("Second call");

// Memoized function
console.time("Memoized First call");
console.log(clumsySquareMemoize(9467, 7649));
console.timeEnd("Memoized First call");

console.time("Memoized Second call");
console.log(clumsySquareMemoize(9467, 7649));
console.timeEnd("Memoized Second call");
