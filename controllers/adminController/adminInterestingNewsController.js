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

    if((title !== "") && (description !== "") && (link !== "")){
        InterestingNews.insert(req.body).then((result)=>{
            if (result != null) {
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