const express = require('express');

const appsController = require('../../controllers/appController/appsController');

const router = express.Router();

router.post('/view_all', appsController.view_all);

module.exports = router;