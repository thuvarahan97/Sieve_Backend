const PrivacyLaws = require('../../models/adminModel/adminPrivacyLawsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
            return new Promise((resolve, reject) => {
                resolve((PrivacyLaws.getAllData()));
            });
        };
        fetchData().then((result)=>{
            res.status(200).render('privacy_laws', { result: result });
        }).catch((err) => {
            if (err) {
                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
            }
        });
    }

    //upated from here
exports.viewAddForm=(req,res,next)=>{
    res.render('privacy_laws.add.ejs');
}

exports.insert=(req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const link = req.body.link;
    const admin_id = req.session.admin_id;

    if((title !== "") && (description !== "") && (link !== "")){
        PrivacyLaws.insert(req.body, admin_id).then((result)=>{
            if (result == 'success') {
                res.status(200).redirect('/privacy_laws');
            }
            else {
                res.status(404).render('privacy_laws.add.ejs', {serverError: false, error: 'Unable to save data!'});
            }
        }).catch(()=>{
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        })
    }else{
        res.status(404).render('privacy_laws.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        PrivacyLaws.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('privacy_laws.edit.ejs', { result: result });
            }
            else {
                res.status(404).redirect('/privacy_laws');
            }
        }).catch(()=>{
            res.status(404).redirect('/privacy_laws');
        });
    }
    else{
        res.status(404).redirect('/privacy_laws');
    }
}

exports.update = (req, res, next) => {
    const title = req.body.link;
    const description = req.body.description;
    const link = req.body.link;

    if((title !== "") && (description !== "") && (link !== "")){
        PrivacyLaws.update(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/privacy_laws');
            }
            else {
                res.status(404).render('privacy_laws.edit.ejs', { serverError: false, error: 'Unable to update data!' });
            }
        }).catch(()=>{
            res.status(404).render('privacy_laws.edit.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('privacy_laws.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        PrivacyLaws.delete(id).then((result)=>{
            if (result != null) {
                res.status(404).redirect('/privacy_laws');
            }
            else {
                res.status(404).redirect('/privacy_laws');
            }
        }).catch(()=>{
            res.status(404).redirect('/privacy_laws');
        });
    }
    else{
        res.status(404).redirect('/privacy_laws');
    }
}