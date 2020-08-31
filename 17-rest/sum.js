function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);