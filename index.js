require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/', (req, res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
