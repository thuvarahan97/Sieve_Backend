const express = require('express');
const usersController = require('../../controllers/adminController/adminUsersController');
const router = express.Router();

router.get('/', usersController.viewAll);

module.exports = router;