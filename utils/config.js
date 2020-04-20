const dotenv = require('dotenv');
dotenv.config();

exports.database = {
    host: 'localhost',
    user: 'root',
    name: 'sieve',
    password: '',
    port: '3306',
    multipleStatements: true
};