import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { postCongestion } from './controller/congestion.js';

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));


app.post("/congestion", postCongestion);

app.listen(PORT, () => {
  console.log(PORT, "tlqkf");
});