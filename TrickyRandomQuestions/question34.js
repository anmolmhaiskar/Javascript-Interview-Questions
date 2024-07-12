// Polyfill for forEach for Object

const obj = {
  name: "Bunny",
  age: 19,
};

Object.prototype.foreach = function (cb) {
  let keys = Object.keys(this);
  keys.forEach((key) => {
    cb(key, this[key]);
  });

  //   for (let key in this) {
  //     cb(key, this[key]);
  //   }
};

obj.foreach(function (key, value) {
  console.log(key, " ", value);
});
