const db = require('../../utils/database');

module.exports = class PrivacyPolicy {

    static getPrivacyPolicyFromId(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_privacy_tip WHERE pt_id = ?", [id]))
        }).then(value => {
            const detail = value[0];
            return new PrivacyPolicy(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataTypes(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM view_app_data_type WHERE app_id = ?", [id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataUsage(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_usage WHERE app_id = ?", [id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataUsage(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_usage WHERE app_id = ?", [id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataRemoval(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_removal WHERE app_id = ?", [id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllContacts(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT contact_link,email_address,first_line,second_line,third_line,fourth_line FROM view_app_privacy_officer WHERE app_id = ?", [id]))
        }).catch((err) => {
            console.log(err);
        });
    }
};

