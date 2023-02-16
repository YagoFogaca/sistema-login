import { CreateUser } from '../interfaces/user/user.create';
import { AuthenticationEmail } from '../utils/system-email';
import { Bcrypt } from '../utils/bcrypt';
import { UserRepository } from '../repositorys/user.repository';
import { UserValidation } from '../user/user.validation';
import { Jwt } from '../utils/jwt';
import { AuthService } from './auth.service';

export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authService: AuthService,
    ) {}

    async create(user: CreateUser) {
        const validateEmail = await this.userRepository.findByEmail(user.email);
        if (validateEmail) {
            throw new Error('Esse email já está cadastrado');
        }

        const userValidation = new UserValidation(user).printUser();

        const userCreated = await this.userRepository.create(userValidation);

        const cod = Math.floor(Math.random() * 89999) + 10000;
        AuthenticationEmail({ to: userCreated.email, cod: cod });
        const codHash = Bcrypt.Hash(cod.toString());

        const authCreated = await this.authService.create({
            cod_auth: codHash,
            userId: userCreated.id,
        });

        return { user: userCreated, token: Jwt.Sing(authCreated) };
    }

    async findById(id: string) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('Nenhum usuário com esse id');
        }
        return user;
    }

    async delete(id: string) {
        const user = await this.userRepository.delete(id);
        if (!user) {
            throw new Error('Nenhum usuário com esse id');
        }
        return user;
    }
}
