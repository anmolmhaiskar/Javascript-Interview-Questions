function func() {
  return foo;
  console.log("Hello Function");
  foo = 10;
  function foo() {}
  var foo = 200;
}

console.log(typeof func()); // function
