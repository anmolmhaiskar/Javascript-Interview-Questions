show();
const obj = new Test(); //Cannot access 'Test' before initialization

function show() {
  console.log("Hello!"); //Hello! (because of hoisting in JS)
}

class Test {}
