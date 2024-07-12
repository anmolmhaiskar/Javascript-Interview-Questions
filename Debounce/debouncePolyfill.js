const incrementButton = document.getElementById("incrementBtn");
const incrementCountElement = document.getElementById("incrementCount");
const triggerCountElement = document.getElementById("triggerCount");

let incrementCount = 0,
  triggerCount = 0;

const myDebounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const handleTrigger = myDebounce(() => {
  triggerCountElement.innerHTML = ++triggerCount;
}, 1000);

incrementButton.addEventListener("click", () => {
  incrementCountElement.innerHTML = ++incrementCount;
  handleTrigger();
});

// Why the Second Code Fails
// New Timer Each Time: Every click creates a new debounced function, and each function has its own separate timer variable.
// Immediate Invocation: By immediately invoking the function with (...), you are not maintaining a consistent state for timer between clicks.
// This means that each invocation of the function operates independently, leading to multiple setTimeout calls, all of which will execute independently after the delay.

// incrementButton.addEventListener("click", () => {
//     incrementCountElement.innerHTML = ++incrementCount;
//     myDebounce(() => {
//         triggerCountElement.innerHTML = ++triggerCount;
//       }, 1000)();
//   });
