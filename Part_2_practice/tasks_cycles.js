for (let i = 5; i < 11; i++) {
    console.log(i);
}


for (let i = 21; i > 10;) {
    console.log(i = i - 1);
    if (i === 14) break;  
}


for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let i = 2;
while (i <= 16) {
    if  (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}


const arrayOfNumbers = [];
let n = 0;
    
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[n] = i;
        n = n + 1;
}

console.log(arrayOfNumbers);
