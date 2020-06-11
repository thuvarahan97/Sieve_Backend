const express = require('express');
const suggestionsController = require('../../controllers/adminController/adminSuggestionsController');
const router = express.Router();

router.get('/', suggestionsController.viewAll);


module.exports = router;