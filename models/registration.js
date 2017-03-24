module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skill: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "3"
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        //REGISTRATION DATE SHOULD NOT BE REQUESTED FROM USER AT REGISTRATION
        regDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    });
    return User;
};
