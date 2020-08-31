// Normal function
function greetingFirst(name, age) {
    console.log(`My name is ${name}. I am ${age}`);
}
greetingFirst('An', 20);
// Expect: My name is An. I am 20

// Using call has parameter
function greetingSecond(name, age) {
    console.log(`My name is ${name}. I am ${age}`);
}

greetingSecond.call(this, 'An', 20);
// Expect: My name is An. I am 20

//  Using call with anonymous function
function greetingThird() {
    console.log(`My name is ${this.name}. I am ${this.age}`);
}

const An = {
    name: 'An',
    age: 20
};
greetingThird.call(An);
// Expect: My name is An. I am 20

