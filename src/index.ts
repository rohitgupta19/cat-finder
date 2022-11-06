import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

const allowedOrigins = [''];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a cat finder landing web page!');
});

console.log('port', port);
app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
