const score = [100, 330, 2, 80];
score.sort();
console.log(score); // [ 100, 2, 330, 80 ] because it converts the numbers to string and then sort it ["100", "330", "2", "80"] => [ 100, 2, 330, 80 ]
