let i = 0;
function show() {
  console.log(i++);
  show();
}

show(); // stack overflow error

// to make it work and make browser do infinite recursion without stack overflow
// call show() under setTimeout so that it will go in macro task queue and it does not populate the main stack directly hence stack overflow won't happen

let j = 0;
function show() {
  setTimeout(() => {
    console.log(j++);
    show();
  });
}

show();
