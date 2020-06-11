const express = require('express');
const privacyLawsController = require('../../controllers/adminController/adminPrivacyLawsController');
const router = express.Router();

router.get('/', privacyLawsController.viewAll);

router.get('/add', privacyLawsController.viewAddForm);

router.post('/add', privacyLawsController.insert);

router.get('/edit', privacyLawsController.viewEditForm);

router.post('/edit', privacyLawsController.update);

router.get('/delete', privacyLawsController.delete);

module.exports = router;