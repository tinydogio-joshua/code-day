import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import AppRouter from './router';

dotenv.config();

createConnection()
  .then(() => {
    const app = express();

    app.use(bodyParser.urlencoded({ 'extended': true }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    app.use(AppRouter);

    app.listen(process.env.APP_BACKEND_PORT, () => {
      console.log(`🟢 [server]: Server is running at ${process.env.APP_BACKEND_HOST}:${process.env.APP_BACKEND_PORT}`);
    });
  })
  .catch((error) => console.error(error));
