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
exports.AuthService = void 0;
const crypto_1 = require("crypto");
const jwt_1 = require("../utils/jwt");
const bcrypt_1 = require("../utils/bcrypt");
class AuthService {
    constructor(authRepository, userRepository) {
        this.authRepository = authRepository;
        this.userRepository = userRepository;
    }
    create(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authRepository.createAuth({
                id: (0, crypto_1.randomUUID)(),
                cod_auth: auth.cod_auth,
                userId: auth.userId,
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authRepository.findByIdUser(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authRepository.delete(id);
        });
    }
    authentication(id_user, token, cod) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                jwt_1.Jwt.Verify(token.slice(7));
            }
            catch (error) {
                yield this.delete(id_user);
                throw new Error('Error authenticating');
            }
            const verifyCod = yield this.findById(id_user);
            if (!verifyCod) {
                throw new Error('Error authenticating');
            }
            const authentication = bcrypt_1.Bcrypt.Compare(cod, verifyCod.cod_auth);
            if (!authentication) {
                throw new Error('Error authenticating');
            }
            const authenticatedUser = yield this.userRepository.update(id_user, {
                authentication: true,
            });
            if (!authenticatedUser) {
                throw new Error('Error authenticating');
            }
            return yield this.delete(id_user);
        });
    }
}
exports.AuthService = AuthService;
