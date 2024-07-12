const bird = {
  name: "🐦",
};

const animal = {
  name: "🐼",
};

function show() {
  console.log(this.name);
}

const bindFunc = show.bind(bird);

bindFunc.call(animal); // 🐦

// because once the bind function is called the context of that function is permanently set to the object we passed in the bind function
