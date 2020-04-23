const express = require('express');

const suggestionController = require('../controllers/suggestionController');

const router = express.Router();

/* GET users listing. */

router.post('/insert',suggestionController.insert);

module.exports = router;
