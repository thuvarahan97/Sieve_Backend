const express = require('express');
const userController = require('../controllers/adminController');
const router = express.Router();

router.get('/', function(req, res, next) {
    if (req.session.loggedin == true) {
        res.redirect('/');
    }
    else {
        res.render('admin-login.ejs');
    }
});

router.get('/login', function(req, res, next) {
    if (req.session.loggedin == true) {
        res.redirect('/');
    }
    else {
        res.render('admin-login.ejs');
    }
});
router.get('/signup', function(req, res, next) {
    if (req.session.loggedin == true) {
        res.redirect('/');
    }
    else {
        res.render('admin-signup.ejs');
    }
});

router.post('/login', userController.admin_login);
router.post('/signup', userController.admin_signup);

module.exports = router;