import express, { Application } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.listen(5000);
