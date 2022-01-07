require('dotenv').config();
const express = require('express');
const expressHbs = require('express-handlebars');

const app = module.exports = express();
const appRoutes = require('./src/routes');

app.use('/', appRoutes);
app.use(express.static('public'))

const hbs = expressHbs.create({
    partialsDir: [
        'views/partials/'
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.disable('x-powered-by');

const PORT = process.env.PORT || 3001;
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}


