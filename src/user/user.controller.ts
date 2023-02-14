import { UserService } from './user.service';
import { Request, Response } from 'express';

export class UserController {
    constructor(private readonly userService: UserService) {}

    async create(req: Request, res: Response) {
        try {
            const data = await this.userService.create(req.body);
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const data = await this.userService.findAll();
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const data = await this.userService.findById(req.params.id);
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const data = await this.userService.delete(req.params.id);
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    }
}
