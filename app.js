const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

var port;
port = process.env.PORT || 3000;
app.listen(port);

