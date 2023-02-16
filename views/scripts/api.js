const url = 'http://localhost:3000/user';

export class Api {
    static async create(user) {
        const userCreated = await fetch(url + '/create', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(user),
        });

        return await userCreated.json();
    }

    static async authentication(cod, id_user, token) {
        const userAuth = await fetch(url + '/authentication/' + id_user, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }),
            body: JSON.stringify(cod),
        });

        return await userAuth.text();
    }
}
