const express = require('express')

var cors = require('cors')

const route = require('./route')

const routeComment = require('./routeComment')

const bodyparser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/blogs', route);

app.use('/comments', routeComment);

/*app.use((req, res) => {
    res.json({ message: 'Requête a bien reçue !' }); 
 });*/

module.exports = app;

