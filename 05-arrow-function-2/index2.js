var a = {
    foo: 'bar',
    run: function() {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
};

a.run()