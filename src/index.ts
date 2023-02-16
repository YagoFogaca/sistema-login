import express, { Router } from 'express';
import { Factory } from './generic.factory';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const router = Router();
const index = Factory(router);

app.use(express.json());
app.use('/user', index.Routes());

app.listen(port, () => {
    console.log('Server started', port);
});
