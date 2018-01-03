module.exports = (sequelize, DataTypes) => {
    const Manual = sequelize.define('Manual', {})

    Manual.associate = function (models) {
        Manual.belongsTo(models.User)
        Manual.belongsTo(models.Product)
    }

    return Manual
}