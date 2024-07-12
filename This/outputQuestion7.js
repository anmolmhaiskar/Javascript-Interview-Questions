// Implement calc
// const result = calc.add(10).mul(20).subtract(30).add(10);
// console.log(result.total);

const calc = {
  total: 0,
  add(value) {
    this.total += value;
    return this;
  },
  mul(value) {
    this.total *= value;
    return this;
  },
  subtract(value) {
    this.total -= value;
    return this;
  },
  divide(value) {
    this.total /= value;
    return this;
  },
};

const result = calc.add(10).mul(20).subtract(30).add(10);
console.log(result.total);
