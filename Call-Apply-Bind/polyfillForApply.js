let myCar = {
  color: "Gray",
  company: "bugatti",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${price}${currency}`
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " It's not Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(myCar, ["$", "1M"]);
