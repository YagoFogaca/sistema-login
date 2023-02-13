"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const index_prisma_1 = require("../prisma/index.prisma");
const user_repository_1 = require("./user.repository");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const user_routes_1 = require("./user.routes");
function UserFactory(router) {
    const userRepository = new user_repository_1.UserRepository(index_prisma_1.prisma);
    const userService = new user_service_1.UserService(userRepository);
    const userController = new user_controller_1.UserController(userService);
    const userRotes = new user_routes_1.UserRotes(userController, router);
    return userRotes;
}
exports.UserFactory = UserFactory;
