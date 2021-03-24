const Pool = require('pg').Pool; 
require("dotenv").config();

const devConfig = {
    user: process.env.PGUSER, 
    password: process.env.PGPASSWORD, 
    host: process.env.PGHOST, 
    port: process.env.PGPORT, 
    database: process.env.PGDATABASE
};

const proConfig = process.env.DATABASE_URL;

// const proConfig = {
//     connectionString: process.env.DATABASE_URL, 
//     ssl: {
//         rejectUnauthorized: false
//       }
// }
// const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig: devConfig ); 

const pool = new Pool({
    connectionString:
      process.env.NODE_ENV === "production" ? proConfig : devConfig,
  });
  

module.exports = pool; 