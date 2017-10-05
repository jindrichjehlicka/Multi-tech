module.exports = {
    port: process.env.PORT || 8081,
 
    db:{
        database:process.env.DB_NAME || 'multitech' ,
        user:process.env.DB_USER || 'multitech',
        password:process.env.DB_PASS || 'multitech',
        mine:process.env.DB_MINE || 'multitech',
        options:{
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'locahost',
            storage:'./multitech.sqlite'

        }
    },
    authentication:{
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}