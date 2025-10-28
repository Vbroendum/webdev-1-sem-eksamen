const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const PORT = 3000;

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
}));

app.set('view engine', 'hbs');
app.set('views', './views')

app.get('/', (req, res) => {
    const buttons = [
            { text: 'Service Plan', link: '/serviceplan' },
            { text: 'Another Page', link: '/anotherpage' },
        ];
    res.render('dashboard-admin', { title: 'Dashboard', buttons
        
    });
});

app.get('/serviceplan', (req, res) => {
    res.render('serviceplan', { title: 'Service Plan' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})