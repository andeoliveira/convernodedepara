const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.json());
app.use(routes);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));


app.listen(8081, () => {
    console.log(`Running in http://localhost:8081`);
})

