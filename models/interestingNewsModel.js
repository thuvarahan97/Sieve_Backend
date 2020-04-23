const db = require('../utils/database');

module.exports = class InterestingNews {
    constructor(params) {
        this.id = params.news_id,
            this.law = params.news,
            this.fullLink = params.full_link,
            this.desc = params.description
    }

    static getInterestingNewsFromId(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_interesting_news WHERE news_id = ?", [id]))
        }).then(value => {
            const detail = value[0];
            return new InterestingNews(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllInterestingNews() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_interesting_news"))
        }).catch((err) => {
            console.log(err);
        });
    }
};