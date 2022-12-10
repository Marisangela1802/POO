var fatorial = function (x) {
    var res = 1;
    for (var i = 1; i <= x; i++) {
        res = res * i;
    }
    return res;
};
console.log(fatorial(5));
