"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(_nome, _idade, _genero) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Animal.prototype.getIdade = function () {
        return this.idade;
    };
    Animal.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Animal.prototype.getGenero = function () {
        return this.genero;
    };
    Animal.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    return Animal;
}());
exports.Animal = Animal;
