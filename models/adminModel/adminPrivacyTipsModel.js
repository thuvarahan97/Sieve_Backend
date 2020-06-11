const db = require('../../utils/database');

module.exports = class PrivacyTips {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_content A INNER JOIN tbl_privacy_tip B USING (content_id) WHERE A.deleted='false'"))
        }).catch((err) => {
            console.log(err);
        });
    }
  
    static insert(input, admin_id) {
        return new Promise((resolve) => {
            db.transaction(function(done){
                db.query("INSERT INTO tbl_content (admin_id, deleted) VALUES (?,?)", 
                [admin_id, 'False'])
                .then(result => {
                    const content_id = result.insertId;

                    db.query("INSERT INTO tbl_privacy_tip (content_id, tip, description) VALUES (?,?,?)", [content_id, input.title, input.description])
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
            resolve(db.query("SELECT * FROM tbl_privacy_tip WHERE pt_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_privacy_tip SET tip = ?, description = ? WHERE pt_id = ?", [input.title, input.description, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_content A INNER JOIN tbl_privacy_tip B USING (content_id) SET A.deleted = 'True' WHERE B.pt_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};