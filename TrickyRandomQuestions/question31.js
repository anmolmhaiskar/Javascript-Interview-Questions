if ([]) {
  console.log("💀"); // 💀
}

if ([] == false) {
  console.log("🍪"); // 🍪
} else {
  console.log("🤍");
}

// comparison of negative zero
console.log(0 == -0); // true
console.log(0 === -0); // true
console.log(Object.is(0 - 0)); // false (correct answer)
