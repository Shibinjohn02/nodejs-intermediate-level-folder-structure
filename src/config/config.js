require('dotenv').config();

module.exports = {
    database : {
        local: {
            username: process.env.LOCAL_MYSQL_USER,
            password: process.env.LOCAL_MYSQL_PASSWORD,
            database: process.env.LOCAL_MYSQL_DB,
            host: process.env.LOCAL_MYSQL_HOST,
            dialect: process.env.LOCAL_DB_DIALECT
        },
        development: {
            username: process.env.DEV_MYSQL_USER,
            password: process.env.DEV_MYSQL_PASSWORD,
            database: process.env.DEV_MYSQL_DB,
            host: process.env.DEV_MYSQL_HOST,
            dialect: process.env.DEV_DB_DIALECT
        },
        production: {
            username: process.env.PROD_MYSQL_USER,
            password: process.env.PROD_MYSQL_PASSWORD,
            database: process.env.PROD_MYSQL_DB,
            host: process.env.PROD_MYSQL_HOST,
            dialect: process.env.PROD_DB_DIALECT
        },
    },
}