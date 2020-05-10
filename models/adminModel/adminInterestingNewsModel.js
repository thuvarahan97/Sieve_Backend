const db = require('../../utils/database');

module.exports = class InterestingNews {
    constructor(params) {
        this.common_user_id = params.common_user_id,
        this.email = params.email
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_content A INNER JOIN tbl_intersting_news B USING (content_id) WHERE A.deleted = 'false'"))
        }).catch((err) => {
            console.log(err);
        });
    }

    static insert(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_intersting_news (news, description, full_link) VALUES (?,?,?)", [input.title, input.description, input.link]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetch(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_intersting_news WHERE news_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_intersting_news SET news = ?, description = ?, full_link = ? WHERE news_id = ?", [input.title, input.description, input.link, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_content A INNER JOIN tbl_intersting_news B USING (content_id) SET A.deleted = 'True' WHERE B.news_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};

