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
};

