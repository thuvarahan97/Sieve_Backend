const express = require('express');
const usersController = require('../../controllers/adminController/adminUsersController');
const router = express.Router();

router.get('/', usersController.viewAll);

router.get('/block_user', usersController.blockUser);

router.get('/unblock_user', usersController.unblockUser);

module.exports = router;