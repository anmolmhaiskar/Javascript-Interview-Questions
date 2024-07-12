function show() {
  this.name = "Rajnish";
  return { name: "Vasco da Gama kiska mama?" };
}

const showObj = new show();
console.log(showObj.name); //Vasco da Gama kiska mama?
// Because javascript will only return "this" if we do not return anything from the function/class otherwise it will return what you try to return in code
