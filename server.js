// Needs for Heroku

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

// Heroku port
app.listen(process.env.PORT || 8080);