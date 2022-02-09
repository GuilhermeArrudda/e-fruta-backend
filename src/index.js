import express, { json } from 'express';
import cors from 'cors';

const server = express();

server.use(json());
server.use(cors());

server.get('/teste', (req, res) => {
    res.send('teste');
});

server.listen(process.env.PORT, () => {
    console.log('Running server in http://localhost:5000');
});