import { randomUUID } from 'crypto';
import { CreateUser } from '../interfaces/user/user.create';

export class UserValidation {
    email: string;
    name: string;
    password: string;
    constructor({ email, name, password }: CreateUser) {
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
        this.validateName();
        this.validatePassword();
        return {
            id: randomUUID(),
            email: this.email,
            name: this.name,
            password: this.password,
            authentication: false,
        };
    }
}
