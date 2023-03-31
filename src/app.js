import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import handleAplicationError from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(routes);
app.use(handleAplicationError);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));