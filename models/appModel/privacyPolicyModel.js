const db = require('../../utils/database');

module.exports = class PrivacyPolicy {

    static getAllDataTypes(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM view_app_data_type WHERE app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataUsage(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_usage WHERE app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataUsage(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_usage WHERE app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataRemoval(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_removal WHERE app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllContacts(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT contact_link,email_address,first_line,second_line,third_line,fourth_line FROM view_app_privacy_officer WHERE app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }
};

