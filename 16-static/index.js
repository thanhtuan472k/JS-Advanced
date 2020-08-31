class Foo {
    static someMethod() {
        console.log('Some method...');
    }

    anotherMethod() {
        console.log('Another method...')
    }
}

Foo.someMethod(); // output: Some method...

// Foo.anotherMethod(); // bug anotherMethod is not a function

let foo = new Foo();
foo.anotherMethod(); // output: Another method...