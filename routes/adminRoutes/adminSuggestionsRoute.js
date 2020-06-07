const express = require('express');
const suggestionsController = require('../../controllers/adminController/adminSuggestionsController');
const router = express.Router();

router.get('/', suggestionsController.viewAll);
// router.get('/delete', suggestionsController.delete);

module.exports = router;