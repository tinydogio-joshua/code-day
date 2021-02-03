import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';
import AppRouter from './router';

dotenv.config();

createConnection()
  .then(() => {
    const app = express();

    app.use(cors({
      origin: `${process.env.APP_FRONTEND_HOST}:${process.env.APP_FRONTEND_PORT}`,
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }));

    app.use(bodyParser.urlencoded({ 'extended': true }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    app.use(AppRouter);

    app.listen(process.env.APP_BACKEND_PORT, () => {
      console.log(`🟢 [server]: Server is running at ${process.env.APP_BACKEND_HOST}:${process.env.APP_BACKEND_PORT}`);
    });
  })
  .catch((error) => console.error(error));
