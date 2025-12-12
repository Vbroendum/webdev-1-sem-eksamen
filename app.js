require('dotenv').config({ debug: false, override: false });
const express = require("express");
const path = require("path");
const multerLib = require("multer");
const upload = require('./middleware/multer');
const { engine } = require('express-handlebars');
const PORT = 3000;
const session = require('express-session');

const routes = require("./routes");
const { notFound, internalError } = require('./middleware/errorHandler');
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
    secure: process.env.SECURE === "true",
    maxAge: 1000 * 60 * 60 * 24, // 24 timer
  }
}));

app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

// Gør brugerdata tilgængelig i alle views via middleware
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  console.log(req.session);
  next();
});

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

// Demo upload route (instruktør-eksempel)
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Uploaded: ' + (req.file ? req.file.filename : 'ingen fil'));
});

app.use('/', routes);

// Multer error handler
app.use((err, req, res, next) => {
  if (err instanceof multerLib.MulterError) {
    // Multer fejl (fx filstørrelse)
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).send('Fil er for stor. Maks 5MB per fil.');
    }
    return res.status(400).send('Fejl ved filupload: ' + err.message);
  } else if (err && err.message) {
    // Custom fileFilter fejl
    return res.status(400).send(err.message);
  }
  next(err);
});

// 404 handler
app.use(notFound);

// 500 error handler
app.use(internalError);

app.listen(PORT, () => {
    console.log(`Server kører på: http://localhost:${PORT}`);
});

module.exports = app;