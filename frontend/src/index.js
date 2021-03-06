const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

app.use(express.static('public'));

app.listen(process.env.APP_FRONTEND_PORT, () => {
  console.log(`🎉 [server]: Server is running at ${process.env.APP_FRONTEND_HOST}:${process.env.APP_FRONTEND_PORT}`);
});
