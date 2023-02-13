import { PrismaClient } from '@prisma/client';
import { IUser } from '../interfaces/user/user.entity';

export class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(user: IUser): Promise<IUser> {
        return await this.prisma.user.create({ data: user });
    }

    async findByEmail(email: string) {
        return await this.prisma.user.findFirst({ where: { email: email } });
    }

    // A fazer depois do sistema de validar email
    async update() {}
}
