// Convert f(a, b, c) to f(a)(b)(c)

function curry(func) {
  console.log("func: ", func);
  return function curriedFunction(...args) {
    console.log("args: ", args);
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        console.log("next: ", next);
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
