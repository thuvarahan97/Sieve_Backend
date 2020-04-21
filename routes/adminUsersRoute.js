const express = require('express');
const usersController = require('../controllers/adminUsersController');
const router = express.Router();

router.get('/', usersController.viewAll);

module.exports = router;