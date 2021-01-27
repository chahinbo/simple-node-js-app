const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ state: 'SECCUSS', message: 'ACHRAF YATIK B ASBA' });
});

app.listen(8080, () => {
    console.log('Server listen on 8080');
});
