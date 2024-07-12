let num = 2;

const val1 = !--num; // !(--num) -> !(1) -> !(true) -> false  (NOTE: here --num will make the num value from 2 to 1 here)
const val2 = !--num; // !(--num) -> !(0) -> !(false) -> true  (NOTE: here --num will make the num value from 1 to 0 here)

console.log(val1); // false
console.log(val2); // true
