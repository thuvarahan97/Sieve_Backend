const db = require('../../utils/database');

module.exports = class Apps {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT A.*, C.category_name AS app_category FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id"))
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static getAppData(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT A.*, C.category_name AS app_category FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id WHERE A.app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllDataTypes(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM `tbl_app_data_type` INNER JOIN tbl_data_type USING (data_type_id) WHERE app_id = ?", [app_id]))
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

