const express = require('express');

const appsController = require('../../controllers/appController/appsController');

const router = express.Router();

router.post('/view_all', appsController.view_all);
router.post('/view_all_search',appsController.view_all_search);

module.exports = router;