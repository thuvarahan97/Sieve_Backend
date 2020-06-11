const express = require('express');
const adminsController = require('../../controllers/adminController/adminAdminsController');
const router = express.Router();

router.get('/', adminsController.viewAll);

router.get('/update',adminsController.update);

router.get('/update_no',adminsController.update_no);

module.exports = router;