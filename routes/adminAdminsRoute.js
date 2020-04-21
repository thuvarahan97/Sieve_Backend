const express = require('express');
const adminsController = require('../controllers/adminAdminsController');
const router = express.Router();

router.get('/', adminsController.viewAll);

module.exports = router;