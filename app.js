const express = require('express');
const app = express();
const engines = require('consolidate'); // consolidate is a wrapper for template interfaces
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


app.engine('html', engines.nunjucks);// register the nunjucks template, associating it with the html extensions
app.set('view engine', 'html');// set the view engine app setting to html meaning were going to use the nunjucks engine to render html
app.set('views', __dirname + '/views'); // specify where our templates are located

MongoClient.connect('mongodb://localhost:27017/parks', function(err, db) {
    app.get('/', function (req, res) {
        res.render('hello', {'name': 'templates'});
    });
// fall through for routes that aren't specified'
    app.use(function (req, res) {
        res.sendStatus(404);
    });

    var port;
    port = process.env.PORT || 3000;
    app.listen(port, function () {
    console.log('Express server listening on ', port);
    });
});