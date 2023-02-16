import { randomUUID } from 'crypto';
import { AuthRepository } from '../repositorys/auth.repository';
import { CreateAuth } from '../interfaces/auth/auth.create';
import { IAuth } from '../interfaces/auth/auth.entity';
import { Jwt } from '../utils/jwt';
import { Bcrypt } from '../utils/bcrypt';
import { UserRepository } from '../repositorys/user.repository';

export class AuthService {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(auth: CreateAuth): Promise<IAuth> {
        return await this.authRepository.createAuth({
            id: randomUUID(),
            cod_auth: auth.cod_auth,
            userId: auth.userId,
        });
    }

    async findById(id: string): Promise<IAuth | null> {
        return await this.authRepository.findByIdUser(id);
    }

    async delete(id: string): Promise<IAuth> {
        return await this.authRepository.delete(id);
    }

    async authentication(id_user: string, token: string, cod: string) {
        try {
            Jwt.Verify(token.slice(7));
        } catch (error) {
            await this.delete(id_user);
            throw new Error('Error authenticating');
        }

        const verifyCod = await this.findById(id_user);
        if (!verifyCod) {
            throw new Error('Error authenticating');
        }

        const authentication = Bcrypt.Compare(cod, verifyCod.cod_auth);
        if (!authentication) {
            throw new Error('Error authenticating');
        }

        const authenticatedUser = await this.userRepository.update(id_user, {
            authentication: true,
        });

        if (!authenticatedUser) {
            throw new Error('Error authenticating');
        }

        return await this.delete(id_user);
    }
}
