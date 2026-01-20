import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.static("public"));
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/checker', (req, res) => {
    res.send({ status: 'failure', message: 'No password provided' });
});
    
app.get('/checker/:password', (req, res) => {
    const password = req.params.password;

    if (password === process.env.PASSWORD) {
        res.send({ status: 'success', message: 'Password is correct' });
    } else {
        res.send({ status: 'failure', message: 'Incorrect password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});