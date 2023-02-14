import { CreateUser } from '../interfaces/user/user.create';
import { AuthenticationEmail } from '../system-email';
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

            // gerar cod aqui, criptografar ele e salvar junto com o perfil

            AuthenticationEmail(userCreated.email);

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
