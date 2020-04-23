const express = require('express');
const appsController = require('../../controllers/adminController/adminAppsController');
const router = express.Router();

router.get('/', appsController.viewAll);

module.exports = router;