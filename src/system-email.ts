import nodemailer from 'nodemailer';

export function AuthenticationEmail(to: string) {
    const cod = Math.floor(Math.random() * 89999) + 10000;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'doe.jhon.fogaca@gmail.com',
            pass: 'mmtaxfpxcqsxqyin',
        },
    });

    const options = {
        from: 'doe.jhon.fogaca@gmail.com',
        to: to,
        subject: 'Autenticação do Email',
        text: `Você realizou o cadastro na nossa plataforma, agora você precisa autenticar o seu Email.\n\n Seu código de validação é : ${cod}\n\n Obrigado pela atenção! Att Yago Fogaça.`,
    };

    const res = transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log('Email enviado com sucesso');
            return true;
        }
    });

    return res;
}
