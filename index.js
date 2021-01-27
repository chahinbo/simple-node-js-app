const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'SECCUSS' });
});

app.listen(8080, () => {
    console.log('Server listen on 8080');
});
