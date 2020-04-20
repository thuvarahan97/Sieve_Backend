const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',userController.user_login);
router.post('/signup',userController.user_signup);

module.exports = router;
