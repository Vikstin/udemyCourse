const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length !== 0) {
        let str = `Семья состоит из: `;
        arr.forEach(function(member) {
             str += `${member} `;
        });
        return console.log(str);
    }
    else { return console.log('Семья пуста');}
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);