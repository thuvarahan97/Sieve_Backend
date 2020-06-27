const Admins = require('../../models/adminModel/adminAdminsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Admins.getAllData()));
        });
    };
    return fetchData().then((result)=>{
        res.status(200).render('admins', { result: result });

    }).catch((err) => {
        if (err) {
            res.status(500).render('error',{ serverError: true, error: createError(500)});
        }
    });
}

exports.update = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Admins.update(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/admins');
            }
            else {
                res.status(409).redirect('/admins');
            }
        }).catch(()=>{
            res.status(500).redirect('/admins');
        });
    }
    else{
        res.status(400).redirect('/admins');
    }
}

exports.update_no = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Admins.update_no(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/admins');
            }
            else {
                res.status(409).redirect('/admins');
            }
        }).catch(()=>{
            res.status(500).redirect('/admins');
        });
    }
    else{
        res.status(400).redirect('/admins');
    }
}