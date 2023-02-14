import express, { Router } from 'express';
import { UserFactory } from './user/user.factory';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const router = Router();
const user = UserFactory(router);

app.use(express.json());
app.use('/user', user.Routes());

app.listen(port, () => {
    console.log('Server started', port);
});
