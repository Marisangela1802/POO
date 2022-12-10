function inteiros(x, y, z) {
    if (x > y && x > z)
        return "x é o maior";
    if (y > x && y > z)
        return "y é o maior";
    if (z > x && z > y)
        return "z é o maior";
    return;
}
console.log(inteiros(10, 4, 7));
