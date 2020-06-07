const InterestingNews = require('../../models/adminModel/adminInterestingNewsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((InterestingNews.getAllData()));
        });
    };
    fetchData().then((result)=>{
        res.status(200).render('interesting_news', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    res.render('interesting_news.add.ejs');
}

exports.insert = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const link = req.body.link;
    const admin_id = req.session.admin_id;

    if((title !== "") && (description !== "") && (link !== "")){
        InterestingNews.insert(req.body, admin_id).then((result)=>{
            if (result == 'success') {
                res.status(200).redirect('/interesting_news');
            }
            else {
                res.status(404).render('interesting_news.add.ejs', {serverError: false, error: 'Unable to save data!'});
            }
        }).catch(()=>{
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        })
    }else{
        res.status(404).render('interesting_news.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        InterestingNews.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('interesting_news.edit.ejs', { result: result });
            }
            else {
                res.status(404).redirect('/interesting_news');
            }
        }).catch(()=>{
            res.status(404).redirect('/interesting_news');
        });
    }
    else{
        res.status(404).redirect('/interesting_news');
    }
}

exports.update = (req, res, next) => {
    const title = req.body.link;
    const description = req.body.description;
    const link = req.body.link;

    if((title !== "") && (description !== "") && (link !== "")){
        InterestingNews.update(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/interesting_news');
            }
            else {
                res.status(404).render('interesting_news.edit.ejs', { serverError: false, error: 'Unable to update data!' });
            }
        }).catch(()=>{
            res.status(404).render('interesting_news.edit.ejs', { serverError: true, error: 'Database Connection Faliure!' })
        });
    }
    else{
        res.status(404).render('interesting_news.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.delete = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        InterestingNews.delete(id).then((result)=>{
            if (result != null) {
                res.status(404).redirect('/interesting_news');
            }
            else {
                res.status(404).redirect('/interesting_news');
            }
        }).catch(()=>{
            res.status(404).redirect('/interesting_news');
        });
    }
    else{
        res.status(404).redirect('/interesting_news');
    }
}