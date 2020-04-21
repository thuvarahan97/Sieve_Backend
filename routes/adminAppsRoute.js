const express = require('express');
const appsController = require('../controllers/adminAppsController');
const router = express.Router();

router.get('/', appsController.viewAll);

module.exports = router;