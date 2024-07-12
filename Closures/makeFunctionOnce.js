function once(func, context = this) {
  //Forms closure with parameter func here hance we are able to call the function only once
  let returnValue;
  return function () {
    if (func) {
      //   console.log(arguments);
      returnValue = func.apply(context, arguments);
      func = null;
    }
    return returnValue;
  };
}

const name = "Abhimanyu";
const printName = (name) => {
  console.log(name);
};

const printOnce = once(printName);
printOnce(name);
printOnce(name);
printOnce(name);
printOnce(name);
