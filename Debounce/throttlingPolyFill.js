const incrementButton = document.getElementById("incrementBtn");
const incrementCountElement = document.getElementById("incrementCount");
const triggerCountElement = document.getElementById("triggerCount");

let incrementCount = 0,
  triggerCount = 0;

const myThrottling = (callback, delay) => {
  let last = 0;
  return (...args) => {
    const currentTime = new Date().getTime();
    if (currentTime - last < delay) {
      return;
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
    last = currentTime;
  };
};

const handleTrigger = myThrottling(() => {
  triggerCountElement.innerHTML = ++triggerCount;
}, 1000);

incrementButton.addEventListener("click", () => {
  incrementCountElement.innerHTML = ++incrementCount;
  handleTrigger();
});

// Difference between debouncing and throttling in these two examples is that
// 1. Debounce : it increments the trigger count if there is a gap of more than delay (n seconds) between the events (event here is clicking the button)
// 2. Throttling: it increments the trigger count after every n seconds i.e. the delay provided until the event is happening (event here is clicking the button)
