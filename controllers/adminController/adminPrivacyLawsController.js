const PrivacyLaws = require('../../models/adminModel/adminPrivacyLawsModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
            return new Promise((resolve, reject) => {
                resolve((PrivacyLaws.getAllData()));
            });
        };
        return fetchData().then((result)=>{
            res.status(200).render('privacy_laws', { result: result });
        }).catch((err) => {
            if (err) {
                res.status(500).render('error',{ serverError: true, error: createError(500)});
            }
        });
    }


exports.viewAddForm=(req,res,next)=>{
    res.status(200).render('privacy_laws.add.ejs');
}

exports.insert=(req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const link = req.body.link;
    const admin_id = req.session.admin.id;

    if((title !== "") && (description !== "") && (link !== "")){
        return PrivacyLaws.insert(req.body, admin_id).then((result)=>{
            if (result == 'success') {
                res.status(200).redirect('/privacy_laws');
            }
            else {
                res.status(409).render('privacy_laws.add.ejs', {serverError: false, error: 'Unable to save data!'});
            }
        }).catch(()=>{
            res.status(500).json({ serverError: true, error: 'Database Connection Faliure!' })
        })
    }else{
        res.status(400).render('privacy_laws.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return PrivacyLaws.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('privacy_laws.edit.ejs', { result: result });
            }
            else {
                res.status(204).redirect('/privacy_laws');
            }
        }).catch(()=>{
            res.status(500).redirect('/privacy_laws');
        });
    }
    else{
        res.status(400).redirect('/privacy_laws');
    }
}

exports.update = (req, res, next) => {
    const title = req.body.link;
    const description = req.body.description;
    const link = req.body.link;

    if((title !== "") && (description !== "") && (link !== "")){
        return PrivacyLaws.update(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/privacy_laws');
            }
            else {
                res.status(409).render('privacy_laws.edit.ejs', { serverError: false, error: 'Unable to update data!' });
            }
        }).catch(()=>{
            res.status(500).render('error',{ serverError: true, error: createError(500)});
        });
    }
    else{
        res.status(400).render('privacy_laws.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return PrivacyLaws.delete(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/privacy_laws');
            }
            else {
                res.status(409).redirect('/privacy_laws');
            }
        }).catch(()=>{
            res.status(500).redirect('/privacy_laws');
        });
    }
    else{
        res.status(400).redirect('/privacy_laws');
    }
}