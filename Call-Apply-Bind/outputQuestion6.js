// what is the output? bind chaining?

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); //John , Bind chaining does not exist in javascript
