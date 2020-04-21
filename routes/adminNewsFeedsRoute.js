const express = require('express');
const newsFeedsController = require('../controllers/adminNewsFeedsController');
const router = express.Router();

router.get('/', newsFeedsController.viewAll);

module.exports = router;