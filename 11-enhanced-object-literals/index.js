//making new object using prototype
function Mouse(name) {
    this.name = name;
}

Mouse.prototype.run = function() {
    console.log(`${this.name} is running`);
}

const mickey = new Mouse('Mickey');
mickey.run();

// object literal
const jerry = {
    name: 'Jerry',
    run: function() {
        console.log(`${this.name} is running`);
    }
};
jerry.run();

// Enhanced object literal
const name = 'Tom';
const cat = {
    name: name, // name,
    run() { //run: function() {}
        console.log(`${this.name} is running`);
    }
};

cat.run();