const express = require('express');
const categoriesController = require('../controllers/adminCategoriesController');
const router = express.Router();

router.get('/', categoriesController.viewAll);

module.exports = router;