"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const crypto_1 = require("crypto");
const system_email_1 = require("../utils/system-email");
const bcrypt_1 = require("../utils/bcrypt");
const user_validation_1 = require("./user.validation");
const jwt_1 = require("../utils/jwt");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validateEmail = yield this.userRepository.findByEmail(user.email);
                if (validateEmail) {
                    throw new Error('Esse email já está cadastrado');
                }
                const userValidation = new user_validation_1.UserValidation(user).printUser();
                const userCreated = yield this.userRepository.create(userValidation);
                const cod = Math.floor(Math.random() * 89999) + 10000;
                (0, system_email_1.AuthenticationEmail)({ to: userCreated.email, cod: cod });
                const codHash = bcrypt_1.Bcrypt.Hash(cod.toString());
                const authCreated = yield this.userRepository.createAuth({
                    cod_auth: codHash,
                    userId: userCreated.id,
                    id: (0, crypto_1.randomUUID)(),
                });
                return jwt_1.Jwt.Sing(authCreated);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findById(id);
                if (!user) {
                    throw new Error('Nenhum usuário com esse id');
                }
                return user;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.delete(id);
                if (!user) {
                    throw new Error('Nenhum usuário com esse id');
                }
                return user;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.UserService = UserService;
