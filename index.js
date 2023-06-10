import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { postCongestion } from './controller/congestion.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8050;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.post('/congestion', postCongestion);

app.listen(PORT, () => {
	console.log(PORT, 'tlqkf');
});
