const express = require('express');

const suggestionController = require('../../controllers/appController/suggestionController');

const router = express.Router();

/* GET users listing. */

router.post('/insert',suggestionController.insert);

module.exports = router;
