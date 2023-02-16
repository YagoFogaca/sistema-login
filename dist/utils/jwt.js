"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    static Sing(auth) {
        return jsonwebtoken_1.default.sign({ auth }, process.env.SECRET ? process.env.SECRET : '', {
            expiresIn: '5m',
        });
    }
    static Verify(token) {
        return jsonwebtoken_1.default.verify(token, process.env.SECRET ? process.env.SECRET : '');
    }
}
exports.Jwt = Jwt;
