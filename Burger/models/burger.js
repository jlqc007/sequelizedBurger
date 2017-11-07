module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        burger: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {

            classMethods: {
                associate: function (models) {
                }
            }
        });
    return Burger;
};