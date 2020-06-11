const express = require('express');
const privacyTipsController = require('../../controllers/adminController/adminPrivacyTipsController');
const router = express.Router();

router.get('/', privacyTipsController.viewAll);

router.get('/add', privacyTipsController.viewAddForm);

router.post('/add', privacyTipsController.insert);

router.get('/edit', privacyTipsController.viewEditForm);

router.post('/edit', privacyTipsController.update);

router.get('/delete', privacyTipsController.delete);

module.exports = router;