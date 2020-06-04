const express = require('express');

const dashboardController = require('../../controllers/appController/dashboardController');

const router = express.Router();

/* GET users listing. */

router.post('/view_all',dashboardController.view_all);

module.exports = router;