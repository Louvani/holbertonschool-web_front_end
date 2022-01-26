function divideBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    }
}

function addBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber + firstNumber;
    }
}
const addBy100 = (function () {
    return addBy(100);
})();

const addBy1000 = (function () {
    return addBy(1000);
})();

const divideBy10 = (function () {
    return divideBy(10);
})();

const divideBy100 = (function () {
    return divideBy(100);
})();


console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));