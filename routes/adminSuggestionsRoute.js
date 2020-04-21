const express = require('express');
const suggestionsController = require('../controllers/adminSuggestionsController');
const router = express.Router();

router.get('/', suggestionsController.viewAll);

module.exports = router;