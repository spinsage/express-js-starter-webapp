const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express Webapp Boilerplate',
        layout: 'main'
    });
});

router.get('*', function (req, res) {
    res.status(404);
    res.render('404', {
        title: '404 - The page could not be found',
    });
});

module.exports = router;
