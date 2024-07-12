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

  login(result) {
    console.log(
      this.name + (result ? " Logged in successfully!" : " Failed to login")
    );
  },
};

// checkPassword(?, ?) what will you pass here since we have only one login function

checkPassword(user.login.bind(user, true), user.login.bind(user, false));
