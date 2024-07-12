// 4 ways to convert a normal function to IIFE

(function IIFE() {
  console.log("IIFE1");
})();

(function IIFE() {
  console.log("IIFE2");
})();

!(function IIFE() {
  console.log("IIFE3");
})();

+(function IIFE() {
  console.log("IIFE4");
})();

// NOTE: Don't miss to add semicolon at the end of these functions otherwise it won't work properly
// OUTPUT:

// IIFE1
// IIFE2
// IIFE3
// IIFE4
