import { Request, Response } from 'express';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

export class Controller {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    async createUser(req: Request, res: Response) {
        try {
            const userCreated = await this.userService.create(req.body);
            res.status(201).send(userCreated);
        } catch (error) {
            console.log(error);
            res.status(400).send('Error creating user');
        }
    }

    async findByIdUser(req: Request, res: Response) {
        try {
            const user = await this.userService.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            res.status(404).send('Error find user');
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userDeleted = await this.userService.delete(req.params.id);
            res.status(200).send(userDeleted);
        } catch (error) {
            console.log(error);
            res.status(404).send('Error delete user');
        }
    }

    async authentication(req: Request, res: Response) {
        try {
            await this.authService.authentication(
                req.params.id,
                req.headers.authorization ?? '',
                req.body.cod,
            );
            res.status(200).send('authenticated user');
        } catch (error) {
            console.log(error);
            res.status(401).send('Error authenticating');
        }
    }
}
