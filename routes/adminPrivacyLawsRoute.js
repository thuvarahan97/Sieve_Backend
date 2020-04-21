const express = require('express');
const privacyLawsController = require('../controllers/adminPrivacyLawsController');
const router = express.Router();

router.get('/', privacyLawsController.viewAll);

module.exports = router;