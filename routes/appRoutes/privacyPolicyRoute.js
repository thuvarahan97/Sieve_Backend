const express = require('express');

const privacyPolicyController = require('../../controllers/appController/privacyPolicyController');

const router = express.Router();

/* GET users listing. */

router.post('/view_all',privacyPolicyController.view_all);

module.exports = router;
