const express = require('express');
const privacyTipsController = require('../../controllers/adminController/adminPrivacyTipsController');
const router = express.Router();

router.get('/', privacyTipsController.viewAll);

module.exports = router;