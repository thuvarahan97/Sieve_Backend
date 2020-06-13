const Categories = require('../../models/adminModel/adminCategoriesModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Categories.getAllData()));
        });
    };
    return fetchData().then((result)=>{
        res.status(200).render('categories', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    res.status(200).render('categories.add.ejs');
}

exports.insert = (req, res, next) => {
    const name = req.body.name;
    const icon = req.body.icon;

    if((name !== "") && (icon !== "")){
        return Categories.insert(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/categories');
            }
            else {
                res.status(409).render('categories.add.ejs', { serverError: false, error: 'Data already exists!' });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).render('categories.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Categories.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('categories.edit.ejs', { result: result, id: id });
            }
            else {
                res.status(204).redirect('/categories');
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/categories');
    }
}

exports.update = (req, res, next) => {
    const id = req.query.id;
    const name = req.body.name;
    const icon = req.body.icon;

    if((id != "") && (id != null)){
        return Categories.fetch(id).then((results)=>{
            if((name !== "") && (icon !== "")){
                return Categories.update(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('/categories');
                    }
                    else {
                        res.status(409).render('categories.edit.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('categories.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    } 
    else{
        res.status(400).redirect('/categories');
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Categories.delete(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/categories');
            }
            else {
                res.status(409).redirect('/categories');
            }
        }).catch(()=>{
            res.status(500).redirect('/categories');
        });
    }
    else{
        res.status(400).redirect('/categories');
    }
}