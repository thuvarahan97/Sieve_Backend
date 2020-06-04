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
    const icon = req.body.icon;
    const bg = req.body.bg;
    const link = req.body.link;

    if((name !== "") && (description !== "") && (category_id != "") && (icon !== "") && (bg !== "") && (link !== "")){
        Apps.insert(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/apps');
            }
            else {
                res.status(404).render('apps.add.ejs', { serverError: false, error: 'Data already exists!' });
            }
        }).catch(()=>{
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('apps.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
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

exports.update = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const category_id = req.body.category_id;
    const icon = req.body.icon;
    const bg = req.body.bg;
    const link = req.body.link;

    if((name !== "") && (description !== "") && (category_id != "") && (icon !== "") && (bg !== "") && (link !== "")){
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
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}