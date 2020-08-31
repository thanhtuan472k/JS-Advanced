// Cách 1:

var a = {
    name: 'TuanDepZai',
    run: function() {
        var run2 = function() {
            console.log('My name is ' + this.name);
        }.bind(this);
        run2();
    }
};

a.run();

// Cách 2:


var a = {
    name: 'TuanDepZai',
    run: function() {
        var that = this;
        var run2 = function() {
            console.log('My name is ' + that.name);
        };
        run2();
    }
};

a.run();

// Cách 3:


var a = {
    name: 'TuanDepZai',
    run: function() {
        var run2 = () => {
            console.log('My name is ' + this.name);
        };
        run2();
    }
};

a.run();

