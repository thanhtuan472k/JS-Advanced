// Lặp ra các phần tử có trong mảng
const names = ['Tuan', 'Dinh', 'An'];

//Cách 1:
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Cách 2:
for (let name of names) {
    console.log(name);
}

// Cách 3:
const obj = {
    0: 'Tuan',
    1: 'Dinh',
    2: 'An',
    length: 3
};

for (let i = 0; i < obj.length; i ++) {
    console.log(obj[i]);
}

// Cách 4 dùng arguments
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += 
    }
}