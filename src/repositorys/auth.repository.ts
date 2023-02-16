import { PrismaClient } from '@prisma/client';
import { IAuth } from '../interfaces/auth/auth.entity';

export class AuthRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async createAuth(auth: IAuth): Promise<IAuth> {
        return await this.prisma.auth.create({ data: auth });
    }

    async findByIdUser(userId: string): Promise<IAuth | null> {
        return await this.prisma.auth.findFirst({ where: { userId: userId } });
    }

    async delete(userId: string): Promise<IAuth> {
        return await this.prisma.auth.delete({ where: { userId: userId } });
    }
}
