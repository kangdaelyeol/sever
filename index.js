import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { postCongestion } from './controller/congestion.js';
import { postUltraVilageFcst, postMidFcst } from './controller/fcst.js';
import dotenv from 'dotenv';
import { postParking } from './controller/parking.js';

dotenv.config();

const PORT = process.env.PORT || 8050;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.post('/congestion', postCongestion);
app.post('/fcst', postMidFcst);
app.post('/parking', postParking);

app.listen(PORT, () => {
	console.log(PORT, 'tlqkf');
});
