const express = require('express');
const adminController = require('../../controllers/adminController/adminController');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).render('admin-login.ejs');
});

router.get('/login', function(req, res, next) {
    res.status(200).render('admin-login.ejs');
});

router.get('/signup', function(req, res, next) {
    res.status(200).render('admin-signup.ejs');
});

router.get('/logout', adminController.admin_logout);

router.post('/login', adminController.admin_login);

router.post('/signup', adminController.admin_signup);

module.exports = router;