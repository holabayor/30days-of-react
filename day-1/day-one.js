class Animal {
  constructor(name, color) {
    this.name = name;
    this.age = 0;
    this.color = color;
    this.legs = 4;
  }

  eat() {
    console.log('nom nom nom');
  }

  speak() {
    console.log('I am an animal');
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name, color);
    this.legs = 4;
  }

  speak() {
    console.log('woof woof');
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, color);
    this.legs = 4;
  }

  speak() {
    console.log('meow meow');
  }
}
