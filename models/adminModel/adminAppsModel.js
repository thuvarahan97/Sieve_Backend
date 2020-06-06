const db = require('../../utils/database');

module.exports = class Apps {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT A.*, C.category_name AS app_category FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id"))
        }).catch((err) => {
            console.log(err);
        });
    }

    static insert(input, icon_link, bg_link) {
        return new Promise((resolve) => {
            db.transaction(function(done){
                db.query("INSERT INTO tbl_application (app_name, description, icon_image, background_image, privacy_policy_link) VALUES (?,?,?,?,?)", 
                [input.name, input.description, icon_link, bg_link, input.link])
                .then(result => {
                    const app_id = result.insertId;

                    db.query("INSERT INTO tbl_app_category (app_id, category_id) VALUES (?,?)", 
                    [app_id, input.category_id])
                    .then(result => {
                        done('success');
                    }, error => {
                        done(error);
                    });
                }, error => {
                    done(error);
                });
            }, function(output){
                resolve(output)
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetch(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_application WHERE app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input, icon_link, bg_link) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_application SET app_name = ?, description = ?, icon_image = ?, background_image = ?, privacy_policy_link = ? WHERE app_id = ?", [input.name, input.description, icon_link, bg_link, input.link, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_application WHERE app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    // Single App View
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

