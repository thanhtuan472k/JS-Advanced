// Template string

// Cách thông thường

function greeting(name) {
    return 'Hi, My name is ' + name + '!';  
}

var result = greeting('Ngo Thanh Tuan');
console.log(result);

// Cách sử dụng template string

function greeting2(name) {
    return `Hi, My name is ${name}!`;
}

var result2 = greeting2('TuanDepZai');
console.log(result2);