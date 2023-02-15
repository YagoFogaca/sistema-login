import { CreateUser } from '../interfaces/user/user.create';
import { AuthenticationEmail } from '../system-email';
import { Bcrypt } from './bcrypt';
import { UserRepository } from './user.repository';
import { UserValidation } from './user.validation';

export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(user: CreateUser) {
        try {
            const validateEmail = await this.userRepository.findByEmail(
                user.email,
            );
            if (validateEmail) {
                throw new Error('Esse email já está cadastrado');
            }

            const userValidation = new UserValidation(user).printUser();

            const userCreated = await this.userRepository.create(
                userValidation,
            );

            const cod = Math.floor(Math.random() * 89999) + 10000;
            AuthenticationEmail({ to: userCreated.email, cod: cod });
            const codHash = Bcrypt.Hash(cod.toString());

            return 'Usuário criado com sucesso';
        } catch (error) {
            console.log(error);
        }
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findById(id: string) {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                throw new Error('Nenhum usuário com esse id');
            }
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: string) {
        try {
            const user = await this.userRepository.delete(id);
            if (!user) {
                throw new Error('Nenhum usuário com esse id');
            }
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async update() {}
}
