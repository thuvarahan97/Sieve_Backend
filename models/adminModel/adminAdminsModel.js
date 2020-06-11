const db = require('../../utils/database');

module.exports = class Admins {


    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_admin ORDER BY admin_id DESC"));
        }).catch((err) => {
            console.log(err);
        });
    }
    static update(id){
        return new Promise((resolve)=>{
            resolve(db.query("UPDATE tbl_admin A SET A.permitted='yes' WHERE A.admin_id=?",[id]));
        
        }).catch((err)=>{
                console.log(err);
        });
    }

    static update_no(id){
        return new Promise((resolve)=>{
            resolve(db.query("UPDATE tbl_admin A SET A.permitted='no' WHERE A.admin_id=?",[id]));
        
        }).catch((err)=>{
                console.log(err);
        });
    }


};

