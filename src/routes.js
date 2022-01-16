const express = require('express');
const logger = require('./utils/logger');

const router = express.Router();

router.get('/', async function (req, res) {

    logger.info(`Processing request : ${req.url}`);

    res.render('index', {
        title: 'Express Webapp Boilerplate',
        layout: 'main'
    });
});

router.get('*', function (req, res) {
    logger.error(`Invalid request : ${req.url}`);

    res.status(404).render('404', {
        title: '404 - The page could not be found',
    });
});

module.exports = router;
