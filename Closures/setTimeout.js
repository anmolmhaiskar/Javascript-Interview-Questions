for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

// op:

// 3
// 3
// 3

// Solutions:

// Solution 1:
// use let

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

// use closure

for (let i = 0; i < 3; i++) {
  function close(j) {
    setTimeout(function log() {
      console.log(j);
    }, 1000);
  }
  close(i);
}
