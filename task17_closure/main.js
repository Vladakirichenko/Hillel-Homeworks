const foo = (function () {
    let result = 0;
    return function (num) {
        result += num
        return result
    }
})();

const sum = foo;

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
