import { Router } from 'express';
import { prisma } from '../prisma/index.prisma';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRotes } from './user.routes';

export function UserFactory(router: Router) {
    const userRepository = new UserRepository(prisma);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRotes = new UserRotes(userController, router);

    return userRotes;
}
