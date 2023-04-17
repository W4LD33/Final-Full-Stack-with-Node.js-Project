const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})
  
module.exports = pool;