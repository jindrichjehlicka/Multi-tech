

module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define('Product', {
    companyName: DataTypes.STRING,
    model:DataTypes.STRING,
    description:DataTypes.TEXT,
    companyLogo:DataTypes.STRING,
    url:DataTypes.STRING
    })



return Product
}
//takes sequelize and data types, returns(define) user model that can be used
