import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ state: 'SUCCESS', message: 'ACHRAF YATIK B ASBA' });
});

app.listen(8080, () => {
    console.log('Server listen on 8080');
});
