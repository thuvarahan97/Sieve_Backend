const express = require('express');
const categoriesController = require('../../controllers/adminController/adminCategoriesController');
const router = express.Router();

router.get('/', categoriesController.viewAll);

router.get('/add', categoriesController.viewAddForm);

router.post('/add', categoriesController.insert);

router.get('/edit', categoriesController.viewEditForm);

router.post('/edit', categoriesController.update);

router.get('/delete', categoriesController.delete);

module.exports = router;