const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');

app.use(cors());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/*
 don't need this anymore because it hits the prod heroku db.
 const localUri = 'mongodb://localhost:27017/parks';
 */
const herokuUri = 'mongodb://heroku_vxdmqrm5:h2dh7j5i28ljk7fq86nubhpk1v@ds113566.mlab.com:13566/heroku_vxdmqrm5';

MongoClient.connect(herokuUri, (err, client) => {
    const db = client.db('heroku_vxdmqrm5');
    // app.get('/', (req, res) => {
    //     res.render('hello', {name: 'templates'});
    // });
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

    app.listen(app.get("port"), () => {
        console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
    });
});