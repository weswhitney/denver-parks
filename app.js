const express = require('express');
const app = express();
const engines = require('consolidate'); // consolidate is a wrapper for template interfaces
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


app.engine('pug', require('pug').__express);// register the nunjucks template, associating it with the html extensions
app.set('view engine', 'pug');// set the view engine app setting to html meaning were going to use the nunjucks engine to render html
app.set('views', __dirname + '/views'); // specify where our templates are located


const localUri = 'mongodb://localhost:27017/parks'; // don't need this anymore because it hits the prod heroku db.
const herokuUri = 'mongodb://heroku_vxdmqrm5:h2dh7j5i28ljk7fq86nubhpk1v@ds113566.mlab.com:13566/heroku_vxdmqrm5';

MongoClient.connect(herokuUri, (err, db) => {
    app.get('/', (req, res) => {
        res.render('hello', {name: 'templates'});
    });
    app.get('/playgrounds', (req, res) => {
        db.collection('playgrounds').find({}).toArray((err, docs) => {
            res.render('playgrounds', { 'playgrounds': docs});
        });
    });
    app.get('/skateparks', (req, res) => {
        db.collection('skateParks').find({}).toArray((err, docs) => {
            res.render('skateparks', { 'skateParks' : docs});
        });
    });
// fall through for routes that aren't specified'
    app.use((req, res) => {
        res.sendStatus(404);
    });

    let port;
    port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log('Express server listening on ', port);
    });
});
