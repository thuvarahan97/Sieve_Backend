const InterestingNews = require('../../models/appModel/interestingNewsModel');

exports.view_all = (req, res, next) => {
    const fetchInterestingNews =  () => {
        return new Promise((resolve, reject) => {
            resolve((InterestingNews.getAllInterestingNews()));
        });
    };
    return fetchInterestingNews().then((news)=>{
        res.status(200).json({
            news: news
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}