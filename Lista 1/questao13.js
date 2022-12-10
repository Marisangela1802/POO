var vendedor = function (vendas) {
    var bonus = 0;
    if (vendas > 2000) {
        bonus = (vendas / 100) * 10;
    }
    else {
        bonus = (vendas / 100) * 7.5;
    }
    return bonus;
};
console.log(vendedor(1500));
