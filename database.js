const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postit",
    database: "postit",
    host: "localhost",
    port: "5432"
});
module.exports = pool;