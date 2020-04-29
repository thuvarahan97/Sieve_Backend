const express = require('express');
const interestingNewsController = require('../../controllers/adminController/adminInterestingNewsController');
const router = express.Router();

router.get('/', interestingNewsController.viewAll);

module.exports = router;