const Person = () => {
  this.name = "ABC";
  return this;
};

const personObj = new Person();

console.log(personObj.name); //TypeError: Person is not a constructor (because we cannot create object of arrow fucntions but we can do with normal functions)
