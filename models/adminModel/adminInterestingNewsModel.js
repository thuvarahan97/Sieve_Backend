const db = require('../../utils/database');

module.exports = class InterestingNews {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_content A INNER JOIN tbl_intersting_news B USING (content_id) WHERE A.deleted = 'false'"))
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

                    db.query("INSERT INTO tbl_intersting_news (content_id, news, description, full_link) VALUES (?,?,?,?)", [content_id, input.title, input.description, input.link])
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
            resolve(db.query("SELECT * FROM tbl_intersting_news WHERE news_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_intersting_news SET news = ?, description = ?, full_link = ? WHERE news_id = ?", [input.title, input.description, input.link, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_content A INNER JOIN tbl_intersting_news B USING (content_id) SET A.deleted = 'True' WHERE B.news_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};

