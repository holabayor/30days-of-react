const name = 'Tallac';
const elevation = 9738;
const print = function () {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};

const mountain = { name, elevation, print };
mountain.print(); // Mt. Tallac is 9738 feet tall
