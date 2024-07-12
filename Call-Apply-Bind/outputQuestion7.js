// what will be the output?

const age = 10;

var person = {
  name: "Anmol",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

person.getAge.call(person2); // 24
person.getAgeArrow.call(person2); //10
