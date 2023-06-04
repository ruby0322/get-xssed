import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.listen({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});