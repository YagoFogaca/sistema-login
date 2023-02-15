import bcrypt from 'bcrypt';

export class Bcrypt {
    static Hash(cod: string) {
        return bcrypt.hashSync(cod, 10);
    }

    static Compare(cod: string, codCompare: string) {
        const compareHash = bcrypt.compareSync(cod, codCompare);
        if (!compareHash) {
            throw new Error('Cod invalido');
        }

        return compareHash;
    }
}
