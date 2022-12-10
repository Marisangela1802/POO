var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DespesaMes = /** @class */ (function () {
    function DespesaMes(mes, valor) {
        this.mes = mes;
        this.valor = valor;
    }
    DespesaMes.prototype.getMes = function () {
        return this.mes;
    };
    DespesaMes.prototype.getValor = function () {
        return this.valor;
    };
    return DespesaMes;
}());
var DespesaDia = /** @class */ (function (_super) {
    __extends(DespesaDia, _super);
    function DespesaDia(dia, mes, valor) {
        var _this = _super.call(this, mes, valor) || this;
        _this.dia = dia;
        return _this;
    }
    DespesaDia.prototype.getDia = function () {
        return this.dia;
    };
    return DespesaDia;
}(DespesaMes));
var DespesaTotal = /** @class */ (function (_super) {
    __extends(DespesaTotal, _super);
    function DespesaTotal(cpf, despesas, dia, mes, valor) {
        var _this = _super.call(this, dia, mes, valor) || this;
        _this.cpf = cpf;
        _this.despesas = despesas;
        return _this;
    }
    DespesaTotal.prototype.getCPF = function (cpf) {
        return cpf;
    };
    DespesaTotal.prototype.totalizaMes = function (mes) {
        if (mes === this.mes) {
            return this.getValor;
        }
    };
    return DespesaTotal;
}(DespesaDia));
//let m:DespesaMes = new DespesaMes(3,25)
var d = new DespesaDia(7, 3, 76);
var d1 = new DespesaDia(20, 5, 88);
var dt = new DespesaTotal(9999999, [d, d1], 7, 5, 4);
console.log(dt.getCPF(99999));
console.log(dt);
