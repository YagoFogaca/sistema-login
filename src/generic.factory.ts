import { Router } from 'express';
import { prisma } from './prisma/index.prisma';
import { UserRepository } from './repositorys/user.repository';
import { AuthRepository } from './repositorys/auth.repository';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Controller } from './generic.controller';
import { Routes } from './generic.routes';

export function Factory(router: Router) {
    const userRepository = new UserRepository(prisma);
    const authRepository = new AuthRepository(prisma);
    const authService = new AuthService(authRepository, userRepository);
    const userService = new UserService(userRepository, authService);
    const controller = new Controller(userService, authService);
    const rotes = new Routes(router, controller);
    return rotes;
}
