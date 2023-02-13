import { UserController } from './user.controller';
import { Router } from 'express';

export class UserRotes {
    constructor(
        private readonly userController: UserController,
        private readonly router: Router,
    ) {}

    Routes() {
        this.router.post('/create-user', (req, res) => {
            this.userController.create(req, res);
        });

        return this.router;
    }
}
