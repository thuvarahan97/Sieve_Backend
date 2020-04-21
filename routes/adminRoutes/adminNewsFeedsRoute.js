const express = require('express');
const newsFeedsController = require('../../controllers/adminController/adminNewsFeedsController');
const router = express.Router();

router.get('/', newsFeedsController.viewAll);

module.exports = router;