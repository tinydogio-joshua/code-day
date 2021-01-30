import express from 'express';
import AppRouter from './router';

const app = express();
const PORT = 8000;

app.use(AppRouter);

app.listen(PORT, () => {
  console.log(`🌭 [server]: Server is running at http://localhost:${PORT}`);
});
