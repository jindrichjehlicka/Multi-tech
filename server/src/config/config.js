module.exports = {
    port: process.env.PORT || 8081,
    protocol: 'tcp',
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
    }
}