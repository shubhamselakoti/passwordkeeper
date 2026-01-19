import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('I love you Aditi')
});

app.get('/checker/:password', (req, res) => {
    const { password } = req.params;
    if (password === process.env.PASSWORD) {
        res.send({ status: 'success', message: 'Password is correct' });
    } else {
        res.send({ status: 'failure', message: 'Incorrect password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});