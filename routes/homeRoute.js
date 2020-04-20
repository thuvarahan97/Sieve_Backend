
const express = require('express');
// const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', function(req, res, next) {
    if (req.session.loggedin == true) {
        res.render('home.ejs');
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;