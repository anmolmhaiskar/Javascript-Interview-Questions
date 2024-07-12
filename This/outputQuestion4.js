// Question: What is the output?
const user = {
  name: "Anmol",
  func() {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

user.func(); //Anmol

// Reason => this in arrow function will point to window object instead of user object since arrow function does not have this or this binding of their own
user.arrowFunc(); //undefined :
