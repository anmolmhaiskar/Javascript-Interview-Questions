function func1() {
  var one = 1,
    two = 2;
}

function func2() {
  var three = (four = 3);
  five = 5; // undeclared variable
}

// func1();
// console.log(one, two); // ReferenceError: one is not defined

func2();
console.log(four); // 3 (because undeclared variables get assigned to global object i.e. window in case of browsers hence we are able to access it)
console.log(five); // 5
