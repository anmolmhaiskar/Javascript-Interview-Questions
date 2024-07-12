class User {
  constructor(val) {
    console.log(this);
    this.name = val;
    blur = "blind";
  }

  getName() {
    console.log(this.name);
  }
}

const user = new User("XYZ");

console.log(user.getName());
