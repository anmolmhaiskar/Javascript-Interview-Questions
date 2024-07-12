let myCar = {
  color: "Gray",
  company: "bugatti",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${price}${currency}`
  );
}

Function.prototype.myBind = function (context = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error(this + " It's not Callable");
  }
  let self = this;

  return function (...args2) {
    self.apply(context, [...args1, ...args2]);
  };
};

Function.prototype.myBind2 = function (context = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error(this + " It's not Callable");
  }
  context.fn = this;

  return function (...args2) {
    context.fn(...args1, ...args2);
  };
};

const bindFunc = purchaseCar.myBind(myCar, "$", "1M");
const bindFunc2 = purchaseCar.myBind2(myCar, "$", "1M");
bindFunc();
bindFunc2();
