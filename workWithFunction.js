function sayHello(name) {
    return `Привет, ${name}!`;
}

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

// console.log(returnNeighboringNumbers(4));

function getMathResult(a, n) {
    if (typeof(n) !== 'number' || n <= 0){
        return a;
    }
    let str = '';

    for(let i = 1; i <= n; i++) {
        if (i === n) {
            str += `${a * i}`;
        } else {
            str += `${a * i}---`;
        }
    }
    return str;
}

// console.log(getMathResult(6, 4));