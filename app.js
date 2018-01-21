const express = require('express');
const app = express();
// consolidate is a wrapper for template interfaces
const engines = require('consolidate');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*
 TODO see if there is a better way to associate the pug template.
 register the pugs template, associating it with the pug extensions
 */
app.engine('pug', require('pug').__express);
// set the view engine app setting to pug meaning were going to use the pug engine to render html
app.set('view engine', 'pug');
// specify where our templates are located
app.set('views', __dirname + '/public/views');

// app.use(require('./playground'));

/*
 don't need this anymore because it hits the prod heroku db.
 const localUri = 'mongodb://localhost:27017/parks';
 */
const herokuUri = 'mongodb://heroku_vxdmqrm5:h2dh7j5i28ljk7fq86nubhpk1v@ds113566.mlab.com:13566/heroku_vxdmqrm5';

MongoClient.connect(herokuUri, (err, db) => {
    app.get('/', (req, res) => {
        res.render('hello', {name: 'templates'});
    });
    app.get('/playgrounds', (req, res) => {
        db.collection('playgrounds').find({}).toArray((err, docs) => {
            res.json({ 'playgrounds': docs});
        });
    });
    app.get('/skateparks', (req, res) => {
        db.collection('skateParks').find({}).toArray((err, docs) => {
            res.json({ 'skateParks' : docs});
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
