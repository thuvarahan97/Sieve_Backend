const express = require('express');

const privacyLawsController = require('../../controllers/appController/privacyLawsController');

const router = express.Router();

/* GET users listing. */

router.post('/view_all',privacyLawsController.view_all);

module.exports = router;
