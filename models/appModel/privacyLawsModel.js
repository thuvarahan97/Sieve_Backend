const db = require('../../utils/database');

module.exports = class PrivacyLaws {
    constructor(params) {
        this.id = params.law_id,
        this.law = params.law,
        this.fullLink = params.full_link,
        this.desc = params.description
    }

    static getPrivacyLawsFromId(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_law WHERE law_id = ?", [id]))
        }).then(value => {
            const detail = value[0];
            return new PrivacyLaws(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllPrivacyLaws() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_law"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

