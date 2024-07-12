// Event capturing, or event trickling, is the process where an event moves from the root to the target element before reaching the intended element.
// In the provided code, if event listeners were set to capture mode, clicking on the childElement would log "grand parent clicked" first, then "parent clicked", and finally "child clicked",
// demonstrating how the click event is captured by ancestor elements before reaching the target element.

const grandParentElement = document.querySelector("#grandParent");
const parentElement = document.querySelector("#parent");
const childElement = document.querySelector("#child");

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grand parent clicked");
  },
  true
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);

childElement.addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
);

// if we click child div then

// output:
// grand parent clicked
// parent clicked
// child clicked
