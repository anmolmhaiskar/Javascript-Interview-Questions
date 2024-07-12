var friend1 = "Ramesh";
let friend2 = "Suresh";

console.log(window.friend1); //Ramesh
console.log(window.friend2); //undefined
// (because block scope variables which are declared in the outer environment which are not inside any function or block
// (i.e. let and const) are stored in script scope and not in window)
