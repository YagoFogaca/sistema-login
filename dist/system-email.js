"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function AuthenticationEmail({ cod, to }) {
    const transporter = nodemailer_1.default.createTransport({
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
        }
        else {
            console.log('Email enviado com sucesso');
            return true;
        }
    });
    return res;
}
exports.AuthenticationEmail = AuthenticationEmail;
