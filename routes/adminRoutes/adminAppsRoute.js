const express = require('express');
const appsController = require('../../controllers/adminController/adminAppsController');
const router = express.Router();
const uploadFile = require('../../utils/file_upload');

router.get('/', appsController.viewAll);

router.get('/add', appsController.viewAddForm);

router.post('/add', uploadFile.upload.any(), appsController.insert);

router.get('/edit', appsController.viewEditForm);

router.post('/edit', appsController.update);

router.get('/edit_app', appsController.viewEditAppForm);

router.post('/edit_app', appsController.updateApp);

router.get('/edit_appcategory', appsController.viewEditAppCategoryForm);

router.post('/edit_appcategory', appsController.updateAppCategory);

router.get('/edit_appicon', appsController.viewEditAppIconForm);

router.post('/edit_appicon', uploadFile.upload.any(), appsController.updateAppIcon);

router.get('/edit_appbg', appsController.viewEditAppBGForm);

router.post('/edit_appbg', uploadFile.upload.any(), appsController.updateAppBG);

router.get('/add_appcontacts', appsController.viewAddAppContactsForm);

router.post('/add_appcontacts', appsController.insertAppContacts);

router.get('/edit_appcontacts', appsController.viewEditAppContactsForm);

router.post('/edit_appcontacts', appsController.updateAppContacts);

router.get('/delete_appcontacts', appsController.deleteAppContacts);

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