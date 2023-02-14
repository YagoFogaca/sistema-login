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

        this.router.get('/find-all', (req, res) => {
            this.userController.findAll(req, res);
        });

        this.router.get('/find/:id', (req, res) => {
            this.userController.findById(req, res);
        });

        this.router.delete('/delete/:id', (req, res) => {
            this.userController.delete(req, res);
        });

        return this.router;
    }
}
