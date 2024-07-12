var status = "Global";

setTimeout(() => {
  const status = "Inner";

  const data = {
    status: "Object",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); //Object

  //when setTimeout executes this callback it executes it in global scope
  // coz setTimeout function is present in window i.e. global object hence the this keyword here is pointing to global object here
  console.log(data.getStatus.call(this)); //Global
});
