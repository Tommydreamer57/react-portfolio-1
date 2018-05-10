const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3006, () => console.log('portfolio running on port 3006'));
