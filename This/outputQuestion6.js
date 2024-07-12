// what will be the output?

var length = 4;

function callback() {
  console.log(this.length); //what is logged?
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);

// what will be the output?

const object2 = {
  length: 5,
  method() {
    const callBackCopy = arguments[0]; // arguments = [callback, 2, 3] soo arguments[0]() will make this inside function points to this arguments object hence output is 3 which is length of array
    callBackCopy();
  },
};

object2.method(callback, 2, 3);
