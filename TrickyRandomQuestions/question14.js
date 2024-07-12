var x = [typeof x, typeof x][0]; // ["undefined", "undefined"][0] => x = "undefined"

console.log(typeof typeof x); //string // typeof typeof "undefined" => typeof "string" => string
