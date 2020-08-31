function joinString(separator, ...strings) {
    return strings.join(separator);
}

let result = joinString('.', 'T', 'U', 'A', 'N'); // output: T.U.A.N
console.log(result);