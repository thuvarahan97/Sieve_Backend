const InterestingNews = require('../../models/adminModel/adminInterestingNewsModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((InterestingNews.getAllData()));
        });
    };
    return fetchData().then((result)=>{
        res.status(200).render('interesting_news', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    res.status(200).render('interesting_news.add.ejs');
}

exports.insert = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const link = req.body.link;
    const admin_id = req.session.admin.id;

    if((title !== "") && (description !== "") && (link !== "")){
        return InterestingNews.insert(req.body, admin_id).then((result)=>{
            if (result == 'success') {
                res.status(200).redirect('/interesting_news');
            }
            else {
                res.status(409).render('interesting_news.add.ejs', {serverError: false, error: 'Unable to save data!'});
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        })
    }else{
        res.status(400).render('interesting_news.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return InterestingNews.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('interesting_news.edit.ejs', { result: result, id: id });
            }
            else {
                res.status(204).redirect('/interesting_news');
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/interesting_news');
    }
}

exports.update = (req, res, next) => {
    const id = req.query.id;
    const title = req.body.link;
    const description = req.body.description;
    const link = req.body.link;

    if((id != "") && (id != null)){
        return InterestingNews.fetch(id).then((results)=>{
            if((title !== "") && (description !== "") && (link !== "")){
                return InterestingNews.update(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('/interesting_news');
                    }
                    else {
                        res.status(409).render('interesting_news.edit.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('interesting_news.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/interesting_news');
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return InterestingNews.delete(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/interesting_news');
            }
            else {
                res.status(409).redirect('/interesting_news');
            }
        }).catch(()=>{
            res.status(500).redirect('/interesting_news');
        });
    }
    else{
        res.status(400).redirect('/interesting_news');
    }
}