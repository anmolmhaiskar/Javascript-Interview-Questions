localStorage.setItem("pass", false);

const isPass = localStorage.getItem("pass");

if (isPass) {
  //isPass = 'false'
  console.log("isPass is truthy value"); // isPass is a truthy value
} else {
  console.log("isPass is a falsy value");
}
