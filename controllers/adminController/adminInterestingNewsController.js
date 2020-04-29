const InterestingNews = require('../../models/adminModel/adminInterestingNewsModel');

exports.viewAll = (req, res, next) => {
    if (!req.session.loggedin) {
        res.redirect('/login');
    }
    else {
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
}