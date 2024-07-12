// call printAnimals such that it prints all animals in object

// const animals = [
//   {species: "Lion", name: "King"},
//   {species: "Whale", name: "Queen"},
// ];

// function printAnimals(i){
//   this.print = function(){
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

animals.forEach((animal, i) => {
  printAnimals.call(animal, i);
});
