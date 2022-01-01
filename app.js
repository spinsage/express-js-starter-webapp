require('dotenv').config();
const express = require('express');
const expresshbs = require('express-handlebars');

const app = express();
const appRoutes = require('./src/routes');

app.use('/', appRoutes);
app.use(express.static('public'))

const hbs = expresshbs.create({
    partialsDir: [
        'views/partials/'
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.disable('x-powered-by');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


