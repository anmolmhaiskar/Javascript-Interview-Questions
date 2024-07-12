// Event bubbling is the process where an event triggered on a child element propagates up to its parent and ancestor elements.
// In the provided code, clicking on the childElement logs "child clicked", then "parent clicked", and finally "grand parent clicked",
// demonstrating how the click event bubbles up through the nested parentElement and grandParentElement, allowing all their respective event listeners to respond.

const grandParentElement = document.querySelector("#grandParent");
const parentElement = document.querySelector("#parent");
const childElement = document.querySelector("#child");

grandParentElement.addEventListener("click", () => {
  console.log("grand parent clicked");
});

parentElement.addEventListener("click", (event) => {
  // event.stopPropagation(); //To stop further propogating the event
  console.log("parent clicked");
});

childElement.addEventListener("click", () => {
  console.log("child clicked");
});

// if we click child div then

// output:
// child clicked
// parent clicked
// grand parent clicked

// NOTE: To stop propogation of events you use
// event.stopPropagation()
