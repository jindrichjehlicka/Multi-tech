module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        companyName: DataTypes.STRING,
        model: DataTypes.STRING,
        description: DataTypes.TEXT,
        companyLogo: DataTypes.STRING,
        url: DataTypes.STRING
    })



    return Product
}
