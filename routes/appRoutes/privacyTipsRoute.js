const express = require('express');

const privacyTipsController = require('../../controllers/appController/privacyTipsController');

const router = express.Router();

/* GET users listing. */

router.post('/view_all',privacyTipsController.view_all);

module.exports = router;
