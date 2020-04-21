const db = require('../../utils/database');

module.exports = class PrivacyLaws {
    constructor(params) {
        this.law_id = params.law_id,
        this.title = params.law,
        this.full_link = params.full_link,
        this.description = params.description,
        this.content_id = params.content_id
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_law"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

