const str = "Hey JS! You R Amazing";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels() {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((ch) => {
      vowels.includes(ch) && count++;
    });
  return count;
}

console.log(countVowels());
