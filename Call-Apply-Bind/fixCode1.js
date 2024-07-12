// fix code at line 22

function checkPassword(success, failure) {
  const password = prompt("Enter password: ", "");
  if (password === "123") {
    success();
  } else {
    failure();
  }
}

const user = {
  name: "Anmol",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

//This code does not print the name of the user
checkPassword(user.loginSuccessful, user.loginFailed); // logged in

//Fix
checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user)); // logged in
