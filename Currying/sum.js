//Infinite Currying... sum(1)(2)...(n)
function f1(a = 0) {
  let sum = a;
  return function f2(b) {
    if (!b) {
      return sum;
    }
    sum += b;
    return f2;
  };
}

//Observation:
// every () user here maps to function ()
// hence we need to return a function as long as we are getting params
// and the last function call with empty params () will be out exit point
console.log(f1(1)(2)(3)(4)(10)());

// WE CAN ALSO WRITE THIS CODE LIKE THIS

function sum(a) {
  return function f2(b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}
