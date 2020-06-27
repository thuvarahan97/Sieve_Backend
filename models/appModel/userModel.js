const db = require('../../utils/database');
const hashFunctions = require('../../utils/hash_function');

module.exports = class User {
    constructor(params) {
        this.id = params.common_user_id,
        this.email = params.email,
        this.password = params.password,
        this.imageUrl = params.imageUrl,
        this.uid = params.uid,
        this.permitted = params.permitted
    }

    static insert(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);
            resolve(db.query("INSERT INTO tbl_common_user (email, password) VALUES (?,?)",
                [userInput.email,
                hashFunctions.encrypt(userInput.password)]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static insertGF(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);
            resolve(db.query("INSERT INTO tbl_common_user (email,uid,imageUrl) VALUES (?,?,?)",
                [userInput.email,
                userInput.uid,
                userInput.imageUrl]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getUserFromEmail(email) {
        console.log(email);
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_common_user WHERE email = ?", [email]))
        }).then(value => {
            const detail = value[0];
            return new User(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

    static getUserFromUid(uid) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_common_user WHERE uid = ?", [uid]))
        }).then(value => {
            const detail = value[0];
            return new User(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

};