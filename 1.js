
var dupa1 = 'dupa1';
console.log(dupa1);
dupa1 = [];
console.log(dupa1);


let dupa2 = 'dupa2';
console.log(dupa2);
dupa2 = {};
console.log(dupa2);

const dupa3 = {
    a: 'a'
}

console.log(dupa3)

dupa3.a = 'marzec'
console.log(dupa3)

console.table({a: 'a'})
console.info('info')
console.warn('warn')
console.error('error')

console.log('%cDupa', 'color:yellow; background-color:blue;font-size:30px')

// Komentarz

/**
 * komentarz
 */


//Stringi
var str1 = 'japko'
var str2 = "oręcz"
var strFinal = `Moje owoce: ${str1} ${str2}`

console.log(strFinal)
// arraye


var mojeOwoce = [
    'japko',
    'oręcz',
    'panan',
    'maraqja',
]

for (var i = 0; i<= mojeOwoce.length; i++) {
    console.log(mojeOwoce[i]);
}

mojeOwoce.forEach(owoc => console.log(owoc))
console.log('--------------------------------')

var collaterals = {
    name: 'hipoteka',
    id: 123,
    draft: true,
}

console.log(Object.keys(collaterals))
console.log(Object.values(collaterals))
console.log(Object.entries(collaterals))

console.log('--------------------')

var mojaFunkcja = function (name = 'world') {
    return `Hello ${name}`
}

console.log(mojaFunkcja('Asia'))
console.log(mojaFunkcja())

// strzałkowa
var calc2plusNumber = (num = 0) => {
    console.log(2 + num)
}

calc2plusNumber(120)
calc2plusNumber()




