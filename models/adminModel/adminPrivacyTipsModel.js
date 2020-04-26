const db = require('../../utils/database');

module.exports = class PrivacyTips {
    constructor(params) {
        this.common_user_id = params.common_user_id,
        this.email = params.email
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_content A INNER JOIN tbl_privacy_tip B USING (content_id)"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

