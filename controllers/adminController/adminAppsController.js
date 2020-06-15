const Apps = require('../../models/adminModel/adminAppsModel');
const Categories = require('../../models/adminModel/adminCategoriesModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    return Apps.getAllData().then((result)=>{
        res.status(200).render('apps', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    return Categories.getAllData().then((categories)=>{
        res.status(200).render('apps.add.ejs', { categories: categories });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.insert = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const category_id = req.body.category_id;
    const link = req.body.link;
    const icon_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[0].filename;
    const bg_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[1].filename;

    return Categories.getAllData().then((categories)=>{
        if((name !== "") && (description !== "") && (category_id != "") && (link !== "")){
            return Apps.insert(req.body, icon_link, bg_link).then((result)=>{
                if (result == 'success') {
                    res.status(200).redirect('/apps');
                }
                else {
                    res.status(409).render('apps.add.ejs', { serverError: false, error: 'Unable to add data!', categories: categories });
                }
            }).catch(()=>{
                res.status(500).render('error', { serverError: true, error: createError(500) });
            });
        }
        else{
            res.status(400).render('apps.add.ejs', { serverError: false, error: 'Input fields cannot be empty.', categories: categories });
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.ejs', { result: result });
            }
            else {
                res.status(204).redirect('/apps');
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/apps');
    }
}

exports.update = (req, res, next) => {
    const id = req.query.id;
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((results)=>{
            if((name !== "") && (description !== "") && (link !== "")){
                return Apps.update(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('/apps');
                    }
                    else {
                        res.status(409).render('apps.edit.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/apps');
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.delete(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/apps');
            }
            else {
                res.status(409).redirect('/apps');
            }
        }).catch(()=>{
            res.status(500).redirect('/apps');
        });
    }
    else{
        res.status(400).redirect('/apps');
    }
}

exports.viewEditAppForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.app.ejs', { result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateApp = (req, res, next) => {
    const id = req.query.id;
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((results)=>{
            if((name !== "") && (description !== "") && (link !== "")){
                Apps.update(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('app?app_id=' + id);
                    }
                    else {
                        res.status(409).render('apps.edit.app.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.edit.app.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppCategoryForm = (req, res, next) => {
    const id = req.query.id;

    return Categories.getAllData().then((categories)=>{
        if((id != "") && (id != null)){
            return Apps.fetchAppCategory(id).then((result)=>{
                if (result.length > 0) {
                    res.status(200).render('apps.edit.appcategory.ejs', { result: result, categories: categories });
                }
                else {
                    res.status(204).redirect('app?app_id=' + id);
                }
            }).catch(()=>{
                res.status(500).render('error', { serverError: true, error: createError(500) });
            });
        }
        else{
            res.status(400).redirect('app?app_id=' + id);
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.updateAppCategory = (req, res, next) => {
    const id = req.query.id;
    const category_id = req.body.category_id;

    return Categories.getAllData().then((categories)=>{
        if((id != "") && (id != null)){
            return Apps.fetchAppCategory(id).then((results)=>{
                if(category_id !== ""){
                    return Apps.updateAppCategory(req.body).then((result)=>{
                        if (result != null) {
                            res.status(200).redirect('app?app_id=' + id);
                        }
                        else {
                            res.status(409).render('apps.edit.appcategory.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results, categories: categories });
                        }
                    }).catch(()=>{
                        res.status(500).render('error', { serverError: true, error: createError(500) });
                    });
                }
                else{
                    res.status(400).render('apps.edit.appcategory.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results, categories: categories });
                }
            }).catch(()=>{
                res.status(500).render('error', { serverError: true, error: createError(500) });
            });
        }
        else{
            res.status(400).redirect('app?app_id=' + id);
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewEditAppIconForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appicon.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateAppIcon = (req, res, next) => {
    const id = req.query.id;
    const icon_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[0].filename;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((results)=>{
            if((req.files[0].filename !== "")){
                return Apps.updateAppIcon(req.body, icon_link).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('app?app_id=' + id);
                    }
                    else {
                        res.status(409).render('apps.edit.appicon.ejs', { serverError: false, error: 'Unable to update icon!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.edit.appicon.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppBGForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appbg.ejs', { result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateAppBG = (req, res, next) => {
    const id = req.query.id;
    const bg_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[0].filename;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((results)=>{
            if((req.files[0].filename !== "")){
                return Apps.updateAppBG(req.body, bg_link).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('app?app_id=' + id);
                    }
                    else {
                        res.status(409).render('apps.edit.appbg.ejs', { serverError: false, error: 'Unable to update background image!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.edit.appbg.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewAddAppContactsForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.add.appcontacts.ejs', { result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.insertAppContacts = (req, res, next) => {
    const id = req.query.id;
    const contact_link = req.body.contact_link;
    const email_address = req.body.email_address;
    const first_line = req.body.first_line;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((results)=>{
            if((contact_link !== "") || (email_address !== "") || (first_line !== "")){
                return Apps.insertAppContacts(req.body).then((result)=>{
                    if (result == 'success') {
                        res.status(200).redirect('app?app_id=' + id);
                    }
                    else {
                        res.status(409).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Unable to add data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', id: id });
            }
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppContactsForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetchAppContacts(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appcontacts.ejs', { result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateAppContacts = (req, res, next) => {
    const id = req.query.id;
    const contact_link = req.body.contact_link;
    const email_address = req.body.email_address;
    const first_line = req.body.first_line;

    if((id != "") && (id != null)){
        return Apps.fetchAppContacts(id).then((results)=>{
            if((contact_link !== "") || (email_address !== "") || (first_line !== "")){
                return Apps.updateAppContacts(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('app?app_id=' + id);
                    }
                    else {
                        res.status(409).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.deleteAppContacts = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.deleteAppContacts(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewAddAppDataTypesForm = (req, res, next) => {
    const id = req.query.id;

    return Apps.fetchCommonDataTypes().then(datatypes => {
        if((id != "") && (id != null)){
            return Apps.fetch(id).then((result)=>{
                if (result.length > 0) {
                    res.status(200).render('apps.add.appdatatypes.ejs', { id: id, datatypes: datatypes });
                }
                else {
                    res.status(204).redirect('app?app_id=' + id);
                }
            }).catch(()=>{
                res.status(500).render('error', { serverError: true, error: createError(500) });
            });
        }
        else{
            res.status(400).redirect('app?app_id=' + id);
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.insertAppDataTypes = (req, res, next) => {
    const id = req.query.id;
    const data_type_id = req.body.data_type_id;

    return Apps.fetchCommonDataTypes().then(datatypes => {
        if((id != "") && (id != null) && (data_type_id !== "")){
            return Apps.insertAppDataTypes(req.body).then((result)=>{
                if (result != null) {
                    res.status(200).redirect('app?app_id=' + id);
                }
                else {
                    res.status(409).render('apps.add.appdatatypes.ejs', { serverError: false, error: 'Unable to add data!', id: id, datatypes: datatypes });
                }
            }).catch(()=>{
                res.status(500).render('error', { serverError: true, error: createError(500) });
            });
        }
        else{
            res.status(400).render('apps.add.appdatatypes.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', id: id, datatypes: datatypes });
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.deleteAppDataTypes = (req, res, next) => {
    const id = req.query.id;
    const data_type_id = req.query.data_type_id;

    if((id != "") && (id != null) && (data_type_id != "") && (data_type_id != null)){
        return Apps.deleteAppDataTypes(id, data_type_id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(200).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewAddAppDataUsagePolicyForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.add.appdatausagepolicy.ejs', { id: id });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.insertAppDataUsagePolicy = (req, res, next) => {
    const id = req.query.id;
    const policy = req.body.policy;

    if((id != "") && (id != null) && (policy !== "")){
        return Apps.insertAppDataUsagePolicy(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).render('apps.add.appdatausagepolicy.ejs', { serverError: false, error: 'Unable to add data!', id: id });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).render('apps.add.appdatausagepolicy.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', id: id });
    }
}

exports.viewEditAppDataUsagePolicyForm = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.fetchAppDataUsagePolicy(id, policy_id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appdatausagepolicy.ejs', { id: id, policy_id: policy_id, result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateAppDataUsagePolicy = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;
    const policy = req.body.policy;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.fetchAppDataUsagePolicy(id, policy_id).then((results)=>{
            if (results.length > 0) {
                if((policy != "") && (policy != null)){
                    return Apps.updateAppDataUsagePolicy(req.body).then((result)=>{
                        if (result != null) {
                            res.status(200).redirect('app?app_id=' + id);
                        }
                        else {
                            res.status(409).render('apps.edit.appdatausagepolicy.ejs', { serverError: false, error: 'Unable to update data!', id: id, policy_id: policy_id, result: results });
                        }
                    }).catch(()=>{
                        res.status(500).render('error', { serverError: true, error: createError(500) });
                    });
                }
                else{
                    res.status(400).render('apps.edit.appdatausagepolicy.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, policy_id: policy_id, result: results });
                }
            } else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.deleteAppDataUsagePolicy = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.deleteAppDataUsagePolicy(policy_id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.viewAddAppDataRemovalPolicyForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.add.appdataremovalpolicy.ejs', { id: id });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.insertAppDataRemovalPolicy = (req, res, next) => {
    const id = req.query.id;
    const policy = req.body.policy;

    if((id != "") && (id != null) && (policy !== "")){
        return Apps.insertAppDataRemovalPolicy(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).render('apps.add.appdataremovalpolicy.ejs', { serverError: false, error: 'Unable to add data!', id: id });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).render('apps.add.appdataremovalpolicy.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', id: id });
    }
}

exports.viewEditAppDataRemovalPolicyForm = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.fetchAppDataRemovalPolicy(id, policy_id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appdataremovalpolicy.ejs', { id: id, policy_id: policy_id, result: result });
            }
            else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.updateAppDataRemovalPolicy = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;
    const policy = req.body.policy;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.fetchAppDataRemovalPolicy(id, policy_id).then((results)=>{
            if (results.length > 0) {
                if((policy != "") && (policy != null)){
                    return Apps.updateAppDataRemovalPolicy(req.body).then((result)=>{
                        if (result != null) {
                            res.status(200).redirect('app?app_id=' + id);
                        }
                        else {
                            res.status(409).render('apps.edit.appdataremovalpolicy.ejs', { serverError: false, error: 'Unable to update data!', id: id, policy_id: policy_id, result: results });
                        }
                    }).catch(()=>{
                        res.status(500).render('error', { serverError: true, error: createError(500) });
                    });
                }
                else{
                    res.status(400).render('apps.edit.appdataremovalpolicy.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, policy_id: policy_id, result: results });
                }
            } else {
                res.status(204).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

exports.deleteAppDataRemovalPolicy = (req, res, next) => {
    const id = req.query.id;
    const policy_id = req.query.policy_id;

    if((id != "") && (id != null) && (policy_id != "") && (policy_id != null)){
        return Apps.deleteAppDataRemovalPolicy(policy_id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(409).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(500).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(400).redirect('app?app_id=' + id);
    }
}

//Single App View
exports.viewApp = (req, res, next) => {
    const app_id = req.query.app_id;
    
    const fetchAppData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAppData(app_id)));
        });
    };

    const fetchDataTypes = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataTypes(app_id)));
        });
    };

    const fetchDataUsage = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataUsage(app_id)));
        });
    };

    const fetchDataRemoval = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataRemoval(app_id)));
        });
    };

    const fetchContacts = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllContacts(app_id)));
        });
    };

    return fetchAppData().then((content) => {
        if (content.length > 0) {
            return fetchDataTypes().then((types) => {
                return fetchDataUsage().then((usages) => {
                    return fetchDataRemoval().then((removals) => {
                        return fetchContacts().then((contacts) => {
                            result = {
                                content: content,
                                types: types,
                                usages: usages,
                                removals: removals,
                                contacts: contacts
                            };
                            res.status(200).render('app', { result: result });
                        }).catch((err) => {
                            if (err) {
                                res.status(500).render('error', { serverError: true, error: createError(500) });
                            }
                        });
                    }).catch((err) => {
                        if (err) {
                            res.status(500).render('error', { serverError: true, error: createError(500) });
                        }
                    });
                }).catch((err) => {
                    if (err) {
                        res.status(500).render('error', { serverError: true, error: createError(500) });
                    }
                });
            }).catch((err) => {
                if (err) {
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                }
            });
        } else {
            res.status(404).redirect('/apps');
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}