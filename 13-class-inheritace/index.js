class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log('Eating');
  }
}

class Bird extends Animal {
  fly() {
    console.log('Flyting');
  }
}

class Parrot extends Bird {
  speak() {
    console.log('Speaking...');
  }
}
const bird = new Parrot('An');
console.log(bird.speak());

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log('Eating');
}

