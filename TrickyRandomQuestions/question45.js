console.log(Person); // ReferenceError: Cannot access 'Person' before initialization

class Person {}

// In JS classes are hoisted but not initialized hence we cannot access them before initialization (it's like let and const)
