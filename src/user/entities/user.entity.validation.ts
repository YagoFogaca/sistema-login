import { randomUUID } from 'crypto';
import { CreateUserDto } from '../dto/create-user.dto';

export class IUserValidation {
    email: string;
    name: string;
    password: string;
    constructor({ email, name, password }: CreateUserDto) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    validateName() {
        if (this.name.length <= 3) {
            throw new Error('Nome invalido');
        }
    }

    validatePassword() {
        if (this.password.length <= 7) {
            throw new Error('Senha invalida');
        }
    }

    printUser() {
        return {
            id: randomUUID(),
            email: this.email,
            name: this.name,
            password: this.password,
        };
    }
}
