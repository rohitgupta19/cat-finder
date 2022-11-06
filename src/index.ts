import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import router from './routes/catRoute';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [''];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));

app.use('/cat', router);

app.get('/', (req, res) => {
  res.send('This is a cat finder landing web page!');
});

console.log('port', port);
app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
