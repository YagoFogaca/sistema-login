"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Bcrypt {
    static Hash(cod) {
        return bcrypt_1.default.hashSync(cod, 10);
    }
    static Compare(cod, codCompare) {
        const compareHash = bcrypt_1.default.compareSync(cod, codCompare);
        if (!compareHash) {
            throw new Error('Cod invalido');
        }
        return compareHash;
    }
}
exports.Bcrypt = Bcrypt;
