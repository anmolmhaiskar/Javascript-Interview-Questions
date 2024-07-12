var myVariable = 100;

function func(marks) {
  myVariable = 200;
  return;

  function myVariable() {} //during memory creation phase of this function the myVariable = function{} will be overrided to a function hence myVariable value will be function in func() function hence it did not change the global myVariable variable
}

func();
console.log(myVariable); //100
