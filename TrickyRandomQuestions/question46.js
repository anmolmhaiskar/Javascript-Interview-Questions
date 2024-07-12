const {
  a = "default",
  b = "default", // only undefined value will be replaced by default rest any other value won't get replaced by default
  c = "default",
  d = "default",
} = { a: null, b: undefined, c: 0, d: false };

console.log({ a, b, c, d });
