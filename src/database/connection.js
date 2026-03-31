import pkg from "pg";

const { Pool } = pkg

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD_BD,
    port: process.env.PORT_BD
});

export default pool;