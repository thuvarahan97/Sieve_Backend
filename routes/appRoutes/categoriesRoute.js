const express = require('express');

const categoriesController = require('../../controllers/appController/categoriesController');

const router = express.Router();

router.post('/view_all', categoriesController.view_all);

module.exports = router;