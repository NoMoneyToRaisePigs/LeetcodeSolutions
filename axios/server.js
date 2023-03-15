const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'))

const routes = require('./routes.js')(app, fs);

// app.get('/', (req, res) => {
//    res.send('welcome to the development api-server');
// });

// app.get('/xxx', (req, res) => {


//    res.send({
//       a: 1, 
//       b:2
//    });

// });

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});