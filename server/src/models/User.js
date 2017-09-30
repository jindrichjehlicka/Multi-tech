module.exports = (sequelize, DataTypes) =>
sequelize.define('User',{
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password: DataTypes.STRING,
    mine: {
        type: DataTypes.STRING
    },
})
//takes sequelize and data types, returns(define) user model that can be used