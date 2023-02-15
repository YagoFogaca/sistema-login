import jwt from 'jsonwebtoken';
import { IAuth } from './interfaces/auth/auth.entity';

export class Jwt {
    static Sing(auth: IAuth) {
        return jwt.sign(
            { auth },
            process.env.SECRET ? process.env.SECRET : '',
            {
                expiresIn: '5m',
            },
        );
    }

    static Verify(token: any) {
        return jwt.verify(token, process.env.SECRET ? process.env.SECRET : '');
    }
}
