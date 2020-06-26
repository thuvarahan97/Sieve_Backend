const db = require('../../utils/database');
const hashFunctions = require('../../utils/hash_function');

module.exports = class Admin {
    constructor(params) {
        this.id = params.admin_id,
        this.email = params.email,
        this.privilege_level = params.privilege_level
    }

    static insert(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);
            resolve(db.query("INSERT INTO tbl_admin (email, password) VALUES (?,?)",
                [userInput.email,
                hashFunctions.encrypt(userInput.password)]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAdminFromEmail(email) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_admin WHERE email = ?", [email]))
        }).then(value => {
            const detail = value[0];
            const admin = new Admin(detail);
            return { admin: admin, password: detail.password, permitted: detail.permitted };
        }).catch((err) => {
            console.log(err);
        });
    }

    static checkEmailAvailability(email) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT COUNT(*) AS count FROM tbl_admin WHERE email = ?", [email]))
        }).then(value => {
            const count = value[0]['count'];
            return count;
        }).catch((err) => {
            console.log(err);
        });
    }

};