const express = require('express');
const dataTypesController = require('../../controllers/adminController/adminDataTypesController');
const router = express.Router();

router.get('/', dataTypesController.viewAll);

router.get('/add', dataTypesController.viewAddForm);

router.post('/add', dataTypesController.insert);

router.get('/edit', dataTypesController.viewEditForm);

router.post('/edit', dataTypesController.update);

// router.get('/delete', dataTypesController.delete);

module.exports = router;