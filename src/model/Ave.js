"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
var Animal_1 = require("./Animal");
var Ave = /** @class */ (function (_super) {
    __extends(Ave, _super);
    function Ave(_envergadura, _nome, _idade, _genero) {
        var _this = _super.call(this, _nome, _idade, _genero) || this;
        _this.envergadura = _envergadura;
        return _this;
    }
    Ave.push = function (novaAve) {
        throw new Error("Method not implemented.");
    };
    Ave.prototype.getEnvergdura = function () {
        return this.envergadura;
    };
    Ave.prototype.setEnvergadura = function (envergadura) {
        this.envergadura = envergadura;
    };
    return Ave;
}(Animal_1.Animal));
exports.Ave = Ave;
