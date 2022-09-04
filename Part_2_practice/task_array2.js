const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return console.log('Ошибка!');
    }
    return console.log(str.split(' ').reverse().join());    
}
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return console.log(newStr);
// }
reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');