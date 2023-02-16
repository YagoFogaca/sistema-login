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
exports.Controller = void 0;
class Controller {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userCreated = yield this.userService.create(req.body);
                res.status(201).send(userCreated);
            }
            catch (error) {
                console.log(error);
                res.status(400).send('Error creating user');
            }
        });
    }
    findByIdUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.findById(req.params.id);
                res.status(200).send(user);
            }
            catch (error) {
                console.log(error);
                res.status(404).send('Error find user');
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDeleted = yield this.userService.delete(req.params.id);
                res.status(200).send(userDeleted);
            }
            catch (error) {
                console.log(error);
                res.status(404).send('Error delete user');
            }
        });
    }
    authentication(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.authService.authentication(req.params.id, (_a = req.headers.authorization) !== null && _a !== void 0 ? _a : '', req.body.cod);
                res.status(200).send('authenticated user');
            }
            catch (error) {
                console.log(error);
                res.status(401).send('Error authenticating');
            }
        });
    }
}
exports.Controller = Controller;
