const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.use(function (req, res) {
    res.sendStatus(404);
});

var port;
port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Express server listening on ', port);
});

