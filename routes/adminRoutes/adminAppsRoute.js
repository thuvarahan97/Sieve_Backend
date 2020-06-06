const express = require('express');
const appsController = require('../../controllers/adminController/adminAppsController');
const router = express.Router();
const uploadFile = require('../../utils/file_upload');

router.get('/', appsController.viewAll);

router.get('/add', appsController.viewAddForm);

router.post('/add', uploadFile.upload.any(), appsController.insert);

router.get('/edit', appsController.viewEditForm);

router.post('/edit', appsController.update);

router.get('/delete', appsController.delete);

router.get('/app', appsController.viewApp);

// router.get('/app/datatypes/add', appsController.viewApp);

// router.get('/app/datatypes/edit', appsController.viewApp);

// router.get('/app/datatypes/delete', appsController.viewApp);

// router.get('/app/datausagepolicy/add', appsController.viewApp);

// router.get('/app/datausagepolicy/edit', appsController.viewApp);

// router.get('/app/datausagepolicy/delete', appsController.viewApp);

// router.get('/app/dataremovalpolicy/add', appsController.viewApp);

// router.get('/app/dataremovalpolicy/edit', appsController.viewApp);

// router.get('/app/dataremovalpolicy/delete', appsController.viewApp);

module.exports = router;