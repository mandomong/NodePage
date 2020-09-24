const maria = require('mysql');
const conn = maria.createConnection({
    host:'***',
    port:***,
    user:'***',
    password:'***',
    database:'test'
});
module.exports = conn;