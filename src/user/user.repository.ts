import { PrismaClient } from '@prisma/client';
import { IAuth } from '../interfaces/auth/auth.entity';
import { IUser } from '../interfaces/user/user.entity';
import { UpdateUser } from '../interfaces/user/user.update';

export class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(user: IUser): Promise<IUser> {
        return await this.prisma.user.create({ data: user });
    }

    async findAll(): Promise<IUser[]> {
        return await this.prisma.user.findMany();
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.prisma.user.findFirst({ where: { email: email } });
    }

    async findById(id: string): Promise<IUser | null> {
        return await this.prisma.user.findFirst({
            where: { id: id },
            include: { auth: true },
        });
    }

    async delete(id: string): Promise<IUser> {
        return await this.prisma.user.delete({ where: { id: id } });
    }

    async update(id: string, user: UpdateUser): Promise<IUser> {
        return await this.prisma.user.update({ where: { id: id }, data: user });
    }

    async createAuth(auth: IAuth): Promise<IAuth> {
        return await this.prisma.auth.create({ data: auth });
    }

    async findByIdUser(userId: string): Promise<IAuth | null> {
        return await this.prisma.auth.findFirst({ where: { userId: userId } });
    }
}
