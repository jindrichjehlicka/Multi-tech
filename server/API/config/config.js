const path = require('path')

module.exports = {
    port: process.env.PORT || 5000,

    db: {
        database: process.env.DB_NAME || 'multitech',
        user: process.env.DB_USER || 'multitech',
        password: process.env.DB_PASS || 'multitech',
        mine: process.env.DB_MINE || 'multitech',
        admin: process.env.DB_ADMIN || 'multitech',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'locahost',
            storage: path.resolve(__dirname, '../../multitech.sqlite')

        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}