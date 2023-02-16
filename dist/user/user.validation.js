"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const crypto_1 = require("crypto");
class UserValidation {
    constructor({ email, name, password }) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    validateName() {
        if (this.name.length <= 3) {
            throw new Error('Nome invalido');
        }
    }
    validatePassword() {
        if (this.password.length <= 7) {
            throw new Error('Senha invalida');
        }
    }
    printUser() {
        this.validateName();
        this.validatePassword();
        return {
            id: (0, crypto_1.randomUUID)(),
            email: this.email,
            name: this.name,
            password: this.password,
            authentication: false,
        };
    }
}
exports.UserValidation = UserValidation;
