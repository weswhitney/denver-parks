const express = require('express');
const app = express();
const engines = require('consolidate'); // consolidate is a wrapper for template interfaces
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


app.engine('html', engines.nunjucks);// register the nunjucks template, associating it with the html extensions
app.set('view engine', 'html');// set the view engine app setting to html meaning were going to use the nunjucks engine to render html
app.set('views', __dirname + '/views'); // specify where our templates are located

var herokuUri;
var localUri;
localUri = 'mongodb://localhost:27017/parks';
herokuUri = 'mongodb://heroku_vxdmqrm5:h2dh7j5i28ljk7fq86nubhpk1v@ds113566.mlab.com:13566/heroku_vxdmqrm5';

MongoClient.connect(herokuUri, function(err, db) {
    app.get('/',function (req, res) {
        res.render('hello', {name: 'templates'});
    });
    app.get('/playgrounds', function (req, res) {
        db.collection('playgrounds').find({}).toArray(function (err, docs) {
            res.render('playgrounds', { 'playgrounds': docs});
        });
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