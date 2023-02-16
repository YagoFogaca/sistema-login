import { Api } from './api.js';
const formCreate = document.getElementById('form-create');
const formCod = document.getElementById('form-auth');

formCreate.addEventListener('submit', async event => {
    event.preventDefault();
    const data = {
        name: formCreate.elements.nome.value,
        email: formCreate.elements.email.value,
        password: formCreate.elements.senha.value,
    };

    if (!(data.name.length <= 3) && !(data.password.length <= 7)) {
        formCreate.style.display = 'none';
        const user = await Api.create(data);
        localStorage.setItem('token', user.token);
        localStorage.setItem('id_user', user.user.id);
        formCod.style.display = 'flex';
    }
});

formCod.addEventListener('submit', async event => {
    event.preventDefault();

    const data = {
        cod: formCod.elements.codigo.value,
    };

    if (!(data.cod.length <= 4)) {
        const userAuth = await Api.authentication(
            data,
            localStorage.getItem('id_user'),
            localStorage.getItem('token'),
        );

        console.log(await userAuth);
    }
});
