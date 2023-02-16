"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const index_prisma_1 = require("./prisma/index.prisma");
const user_repository_1 = require("./repositorys/user.repository");
const auth_repository_1 = require("./repositorys/auth.repository");
const user_service_1 = require("./services/user.service");
const auth_service_1 = require("./services/auth.service");
const generic_controller_1 = require("./generic.controller");
const generic_routes_1 = require("./generic.routes");
function Factory(router) {
    const userRepository = new user_repository_1.UserRepository(index_prisma_1.prisma);
    const authRepository = new auth_repository_1.AuthRepository(index_prisma_1.prisma);
    const authService = new auth_service_1.AuthService(authRepository, userRepository);
    const userService = new user_service_1.UserService(userRepository, authService);
    const controller = new generic_controller_1.Controller(userService, authService);
    const rotes = new generic_routes_1.Routes(router, controller);
    return rotes;
}
exports.Factory = Factory;
