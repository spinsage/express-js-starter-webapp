require('dotenv').config();
const express = require('express');
const expressHbs = require('express-handlebars');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./src/utils/logger');

const app = module.exports = express();
const appRoutes = require('./src/routes');

app.use(express.static('public'))
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use('/', appRoutes);

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
        logger.info(`Server listening on port ${PORT}`);
    });
}
