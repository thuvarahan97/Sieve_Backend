const db = require('../../utils/database');

module.exports = class Apps {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT A.*, C.category_name AS app_category, type_count, usage_count, removal_count, officer_count FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id LEFT OUTER JOIN (SELECT COUNT(app_id) AS type_count, app_id FROM tbl_app_data_type GROUP BY app_id) D ON A.app_id = D.app_id LEFT OUTER JOIN (SELECT COUNT(app_id) AS usage_count, app_id FROM tbl_app_data_usage GROUP BY app_id) E ON A.app_id = E.app_id LEFT OUTER JOIN (SELECT COUNT(app_id) AS removal_count, app_id FROM tbl_app_data_removal GROUP BY app_id) F ON A.app_id = F.app_id LEFT OUTER JOIN (SELECT COUNT(app_id) AS officer_count, app_id FROM tbl_app_officer GROUP BY app_id) G ON A.app_id = G.app_id ORDER BY A.app_id ASC"))
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

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_application SET app_name = ?, description = ?, privacy_policy_link = ? WHERE app_id = ?", [input.name, input.description, input.link, input.id]));
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

    static fetch(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_application WHERE app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAppCategory(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_category WHERE app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateAppCategory(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_app_category SET category_id = ? WHERE app_id = ?", [input.category_id, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static updateAppIcon(input, icon_link) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_application SET icon_image = ? WHERE app_id = ?", [icon_link, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateAppBG(input, bg_link) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_application SET background_image = ? WHERE app_id = ?", [bg_link, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static insertAppContacts(input) {
        return new Promise((resolve) => {
            db.transaction(function(done){
                db.query("INSERT INTO tbl_privacy_officer (contact_link, email_address, first_line, second_line, third_line, fourth_line) VALUES (?,?,?,?,?,?)", 
                [input.contact_link, input.email_address, input.first_line, input.second_line, input.third_line, input.fourth_line])
                .then(result => {
                    const privacy_officer_id = result.insertId;

                    db.query("INSERT INTO tbl_app_officer (app_id, privacy_officer_id) VALUES (?,?)", 
                    [input.id, privacy_officer_id])
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

    static fetchAppContacts(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM view_app_privacy_officer WHERE app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateAppContacts(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE view_app_privacy_officer SET contact_link = ?, email_address = ?, first_line = ?, second_line = ?, third_line = ?, fourth_line = ? WHERE app_id = ?", [input.contact_link, input.email_address, input.first_line, input.second_line, input.third_line, input.fourth_line, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static deleteAppContacts(id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE A FROM tbl_privacy_officer A INNER JOIN tbl_app_officer B USING(privacy_officer_id) WHERE B.app_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchCommonDataTypes() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_data_type"))
        }).catch((err) => {
            console.log(err);
        });
    }

    static insertAppDataTypes(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_app_data_type (app_id, data_type_id) VALUES (?,?)", [input.id, input.data_type_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static deleteAppDataTypes(app_id, data_type_id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_app_data_type WHERE app_id = ? AND data_type_id = ?", [app_id, data_type_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static insertAppDataUsagePolicy(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_app_data_usage (app_id, policy) VALUES (?,?)", [input.id, input.policy]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAppDataUsagePolicy(id, policy_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_usage WHERE app_id = ? AND id = ?", [id, policy_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateAppDataUsagePolicy(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_app_data_usage SET policy = ? WHERE id = ?", [input.policy, input.policy_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static deleteAppDataUsagePolicy(policy_id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_app_data_usage WHERE id = ?", [policy_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static insertAppDataRemovalPolicy(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_app_data_removal (app_id, policy) VALUES (?,?)", [input.id, input.policy]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAppDataRemovalPolicy(id, policy_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_app_data_removal WHERE app_id = ? AND id = ?", [id, policy_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateAppDataRemovalPolicy(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_app_data_removal SET policy = ? WHERE id = ?", [input.policy, input.policy_id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static deleteAppDataRemovalPolicy(policy_id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_app_data_removal WHERE id = ?", [policy_id]));
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

