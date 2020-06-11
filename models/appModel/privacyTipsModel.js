const db = require('../../utils/database');

module.exports = class PrivacyTips {
    constructor(params) {
        this.id = params.pt_id,
        this.tip = params.tip,
        this.desc = params.description
    }

    static getPrivacyTipsFromId(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_tip WHERE pt_id = ?", [id]))
        }).then(value => {
            const detail = value[0];
            return new PrivacyTips(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllPrivacyTips() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_tip"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

