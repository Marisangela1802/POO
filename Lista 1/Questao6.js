function par_impar(x) {
    if (x %= 0) {
        return "Numero é par";
    }
    else {
        return "Numero é impar";
    }
}
console.log(par_impar(23));
