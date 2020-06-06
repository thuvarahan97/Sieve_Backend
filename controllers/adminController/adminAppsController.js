const Apps = require('../../models/adminModel/adminAppsModel');
const Categories = require('../../models/adminModel/adminCategoriesModel');

exports.viewAll = (req, res, next) => {
    Apps.getAllData().then((result)=>{
        res.status(200).render('apps', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    Categories.getAllData().then((categories)=>{
        res.status(200).render('apps.add.ejs', { categories: categories });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
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

    Categories.getAllData().then((categories)=>{
        if((name !== "") && (description !== "") && (category_id != "") && (link !== "")){
            Apps.insert(req.body, icon_link, bg_link).then((result)=>{
                if (result == 'success') {
                    res.status(200).redirect('/apps');
                }
                else {
                    res.status(404).render('apps.add.ejs', { serverError: false, error: 'Unable to add data!', categories: categories });
                }
            }).catch(()=>{
                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
            });
        }
        else{
            res.status(404).render('apps.add.ejs', { serverError: false, error: 'Input fields cannot be empty.', categories: categories });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.ejs', { result: result });
            }
            else {
                res.status(404).redirect('/apps');
            }
        }).catch(()=>{
            res.status(404).redirect('/apps');
        });
    }
    else{
        res.status(404).redirect('/apps');
    }
}

exports.viewEditAppForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(404).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppCategoryForm = (req, res, next) => {
    const id = req.query.id;

    Categories.getAllData().then((categories)=>{
        if((id != "") && (id != null)){
            Apps.fetchAppCategory(id).then((result)=>{
                if (result.length > 0) {
                    res.status(200).render('apps.edit.appcategory.ejs', { result: result, categories: categories });
                }
                else {
                    res.status(404).redirect('app?app_id=' + id);
                }
            }).catch(()=>{
                res.status(404).redirect('app?app_id=' + id);
            });
        }
        else{
            res.status(404).redirect('app?app_id=' + id);
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewEditAppIconForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appicon.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(404).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppBGForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appbg.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(404).redirect('app?app_id=' + id);
    }
}

exports.viewAddAppContactsForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.add.appcontacts.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(404).redirect('app?app_id=' + id);
    }
}

exports.viewEditAppContactsForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.fetchAppContacts(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('apps.edit.appcontacts.ejs', { result: result });
            }
            else {
                res.status(404).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).redirect('app?app_id=' + id);
        });
    }
    else{
        res.status(404).redirect('app?app_id=' + id);
    }
}

exports.update = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;

    if((name !== "") && (description !== "") && (link !== "")){
        Apps.update(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/apps');
            }
            else {
                res.status(404).render('apps.edit.ejs', { serverError: false, error: 'Unable to update data!' });
            }
        }).catch(()=>{
            res.status(404).render('apps.edit.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.updateApp = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;

    if((name !== "") && (description !== "") && (link !== "")){
        Apps.update(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(404).render('apps.edit.ejs', { serverError: false, error: 'Unable to update data!' });
            }
        }).catch(()=>{
            res.status(404).render('apps.edit.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.updateAppCategory = (req, res, next) => {
    const category_id = req.body.category_id;

    Categories.getAllData().then((categories)=>{
        if(category_id !== ""){
            Apps.updateAppCategory(req.body).then((result)=>{
                if (result != null) {
                    res.status(200).redirect('app?app_id=' + req.body.id);
                }
                else {
                    res.status(404).render('apps.edit.appcategory.ejs', { serverError: false, error: 'Unable to update data!', categories: categories });
                }
            }).catch(()=>{
                res.status(404).render('apps.edit.appcategory.ejs', { serverError: true, error: 'Database Connection Faliure!' })
            });
        }
        else{
            res.status(404).render('apps.edit.appcategory.ejs', { serverError: false, error: 'Input fields cannot be empty.', categories: categories });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.updateAppIcon = (req, res, next) => {
    const icon_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[0].filename;

    if((req.files[0].filename !== "")){
        Apps.updateAppIcon(req.body, icon_link).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + req.body.id);
            }
            else {
                res.status(404).render('apps.edit.appicon.ejs', { serverError: false, error: 'Unable to update icon!' });
            }
        }).catch(()=>{
            res.status(404).render('apps.edit.appicon.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.edit.appicon.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.updateAppBG = (req, res, next) => {
    const bg_link = req.protocol + '://' + req.get('host') + '/images/uploads/' + req.files[0].filename;

    if((req.files[0].filename !== "")){
        Apps.updateAppBG(req.body, bg_link).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + req.body.id);
            }
            else {
                res.status(404).render('apps.edit.appbg.ejs', { serverError: false, error: 'Unable to update background image!' });
            }
        }).catch(()=>{
            res.status(404).render('apps.edit.appbg.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.edit.appbg.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.insertAppContacts = (req, res, next) => {
    const contact_link = req.body.contact_link;
    const email_address = req.body.email_address;
    const first_line = req.body.first_line;

    if((contact_link !== "") || (email_address !== "") || (first_line !== "")){
        Apps.insertAppContacts(req.body).then((result)=>{
            if (result == 'success') {
                res.status(200).redirect('app?app_id=' + req.body.id);
            }
            else {
                res.status(404).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Unable to add data!', result: [{app_id: req.body.id}] });
            }
        }).catch(()=>{
            res.status(404).render('apps.add.appcontacts.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', result: [{app_id: req.body.id}] });
    }
}

exports.updateAppContacts = (req, res, next) => {
    const contact_link = req.body.contact_link;
    const email_address = req.body.email_address;
    const first_line = req.body.first_line;

    if((contact_link !== "") || (email_address !== "") || (first_line !== "")){
        Apps.updateAppContacts(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + req.body.id);
            }
            else {
                res.status(404).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Unable to update data!', result: [{app_id: req.body.id}] });
            }
        }).catch(()=>{
            res.status(404).render('apps.add.appcontacts.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.add.appcontacts.ejs', { serverError: false, error: 'Atleast one input field must not be empty.', result: [{app_id: req.body.id}] });
    }
}

exports.deleteAppContacts = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.deleteAppContacts(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('app?app_id=' + id);
            }
            else {
                res.status(200).redirect('app?app_id=' + id);
            }
        }).catch(()=>{
            res.status(404).render('apps.add.appcontacts.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(200).redirect('app?app_id=' + id);
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        Apps.delete(id).then((result)=>{
            if (result != null) {
                res.status(404).redirect('/apps');
            }
            else {
                res.status(404).redirect('/apps');
            }
        }).catch(()=>{
            res.status(404).redirect('/apps');
        });
    }
    else{
        res.status(404).redirect('/apps');
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

    fetchAppData().then((content) => {
        if (content.length > 0) {
            fetchDataTypes().then((types) => {
                fetchDataUsage().then((usages) => {
                    fetchDataRemoval().then((removals) => {
                        fetchContacts().then((contacts) => {
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
                                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                            }
                        });
                    }).catch((err) => {
                        if (err) {
                            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                        }
                    });
                }).catch((err) => {
                    if (err) {
                        res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                    }
                });
            }).catch((err) => {
                if (err) {
                    res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                }
            });
        } else {
            res.status(404).redirect('/apps');
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}