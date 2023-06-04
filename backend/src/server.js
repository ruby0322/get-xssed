import express, { application } from 'express';
import cors from 'cors';
<<<<<<< HEAD
import cookieParser from 'cookie-parser';
=======
import { db } from "db";
>>>>>>> 8db6f28ef93ff7a632c8513c6a3df548496d6ffa

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  console.log('login requested');
  res.send('thisisafakexsstokenforthedemo').status(200).end();
});

app.post('/steal', (req, res) => {
  console.log('Cookie Stolen => ', req.body);
});

app.listen({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});
