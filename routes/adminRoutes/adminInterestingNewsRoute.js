const express = require('express');
const interestingNewsController = require('../../controllers/adminController/adminInterestingNewsController');
const router = express.Router();

router.get('/', interestingNewsController.viewAll);

router.get('/add', interestingNewsController.viewAddForm);

router.post('/add', interestingNewsController.insert);

router.get('/edit', interestingNewsController.viewEditForm);

router.post('/edit', interestingNewsController.update);

router.get('/delete', interestingNewsController.delete);

module.exports = router;