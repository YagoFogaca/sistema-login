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
}
