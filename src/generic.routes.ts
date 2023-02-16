import { Router } from 'express';
import { Controller } from './generic.controller';

export class Routes {
    constructor(
        private readonly router: Router,
        private readonly controller: Controller,
    ) {}

    Routes() {
        this.router.post('/create', (req, res) => {
            this.controller.createUser(req, res);
        });

        this.router.get('/find/:id', (req, res) => {
            this.controller.findByIdUser(req, res);
        });

        this.router.delete('/delete/:id', (req, res) => {
            this.controller.deleteUser(req, res);
        });

        this.router.post('/authentication/:id', (req, res) => {
            this.controller.authentication(req, res);
        });

        return this.router;
    }
}
