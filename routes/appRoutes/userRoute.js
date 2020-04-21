const express = require('express');

const userController = require('../../controllers/appController/userController');

const router = express.Router();

/* GET users listing. */
router.post('/login',userController.user_login);
router.post('/signup',userController.user_signup);

module.exports = router;
