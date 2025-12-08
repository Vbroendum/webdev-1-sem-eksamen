require('dotenv').config({ debug: false, override: false });
const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');
const PORT = 3000;

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
    partialsDir: './views/partials',
    helpers: {
        json: (context) => { return JSON.stringify(context); }
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server kører på: http://localhost:${PORT}`);
})
module.exports = app;