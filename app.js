require('dotenv').config();
const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');

const routes = require("./routes");

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', routes);

module.exports = app;