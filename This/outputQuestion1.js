const user = {
  firstName: "Anmol",
  getName() {
    const firstName = "Rajesh";
    return this.firstName;
  },
};

console.log(user.getName()); //Anmol
