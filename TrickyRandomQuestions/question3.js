const arr = ["name"];
const obj = {};

obj.name = "Ron";

// This is the crucial part. When using obj[arr], JavaScript coerces the array arr to a string.
// The string representation of the array ["name"] is "name",
// because calling .toString() on an array joins its elements with commas (although in this case, there is only one element).
// So, obj[arr] is effectively the same as obj["name"].
// This line sets the property name of obj to "React", overwriting the previous value "Ron"
obj[arr] = "React";

console.log(obj.name);
