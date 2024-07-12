// what is the output ?
// Bound function

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g(); // window object
