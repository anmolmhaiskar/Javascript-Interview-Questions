var Module = (function () {
  function privateFunc() {
    console.log("This is private function.. not accessible to outside world");
  }
  return {
    publicFunc: function () {
      console.log("This is public function.. accessible to outside world");
    },
  };
})();

Module.publicFunc(); //This works fine
Module.privateFunc(); //Since privateFunc is not accessible to outside world this throws error. TypeError: Module.privateFunc is not a function
