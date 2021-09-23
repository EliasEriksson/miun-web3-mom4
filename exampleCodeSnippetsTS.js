var add = function (a, b) {
    return a + b;
};
var numbers = "1 2";
var _a = numbers.split(" "), a = _a[0], b = _a[1];
var result = add(a, b);
console.log(result);
