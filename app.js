require('dotenv').config({ debug: false, override: false });
const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');
const PORT = 3000;
const session = require('express-session');

const routes = require("./routes");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.SECURE,
    maxAge: 1000 * 60 * 60 * 24 // 24 timer
  }
}));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
      },
    helpers: {
        json: (context) => { return JSON.stringify(context); },
        eq: (a, b) => { return a == b; }
    }
    
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server kører på: http://localhost:${PORT}`);
})
module.exports = app;