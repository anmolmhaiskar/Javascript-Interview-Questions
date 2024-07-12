function isPass() {
  return "Pass";
}

function isTopper() {
  return "Topper";
}

const result = isPass() && isTopper();

console.log(result); // Topper
