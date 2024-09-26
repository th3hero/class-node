const dbConfig = {
    production: {
        HOST: process.env.HOST || 'localhost',
        USER: process.env.DB_USER || 'root',
        PASSWORD: process.env.DB_PASSWORD || '',
        DB: process.env.DB_NAME || 'school',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    development: {
        HOST: process.env.HOST || 'localhost',
        USER: process.env.DB_USER || 'root',
        PASSWORD: process.env.DB_PASSWORD || '',
        DB: process.env.DB_NAME || 'school',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

dbConfig.get = function get(env='development'){
    return dbConfig[env];
}

module.exports = dbConfig;