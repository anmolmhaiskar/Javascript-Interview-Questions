let myCar = {
  color: "Gray",
  company: "bugatti",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${price}${currency}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Cannot be bound as It's not Callable");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(myCar, "$", "1M");
