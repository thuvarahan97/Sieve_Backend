const mysql = require('mysql2');
const { database } = require('./config')

const pool = mysql.createPool({
    host: database.host,
    user: database.user,
    database: database.name,
    password: database.password,
    port: database.port,
    multipleStatements: database.multipleStatements
});

const connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    database: database.name,
    password: database.password,
    port: database.port,
    multipleStatements: process.env.multipleStatements
  });


exports.getConnection=() =>{
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected");
        } else {
            console.log("Error while connecting with database");
        }
      });
    return connection;
}

exports.query = (sql, parameters) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, parameters, function (err, results, fields) {
            if (err) {
                console.error(err)
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    })
}

exports.transaction = function(body, done) {

    pool.getConnection(function(err, conn) {

        conn.beginTransaction(function(err) {
            if (err) return done(err);

            body(function(err) {
                if (err) return conn.rollback(function(ff, fff) {
                    done(err);
                });
        
                conn.commit(function(err) {
                    if (err) return conn.rollback(function() {
                        done(err);
                    });
    
                    done();
                });
            });
        });
    });
};