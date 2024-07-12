// const grandParentElement = document.querySelector("#grandParent");
// const parentElement = document.querySelector("#parent");
// const childElement = document.querySelector("#child");

// grandParentElement.addEventListener("click", func);

// parentElement.addEventListener("click", func);

// childElement.addEventListener("click", func);

// function func(event) {
//   console.log("target", event.target); // it points to the target we clicked on and remain same even when the event bubbles up the hierarchy
//   console.log(event.target.tagName); // it points to the tag name i.e. the div in this case
//   console.log("currentTarget", event.currentTarget.tagName); // it points to the current target i.e. the element on which the event listener is attached to in the nested hierarchy and not the actual element on which the event occurrent
//   console.log("this.tagname", this.tagName); // it prints name the function it is pointing to
// }

const parentList = document.getElementById("parentList");
const addItemBtn = document.getElementById("addItemBtn");

// Event delegation: add event listener to the parent element
parentList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert(`You clicked on ${event.target.innerText}`);
  }
});

// Add new items to the list dynamically
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = `Item ${parentList.children.length + 1}`;
  parentList.appendChild(newItem);
});
