module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define("Login", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skill: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "3"
        },
        availability: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        //REGISTRATION DATE SHOULD NOT BE REQUESTED FROM USER AT REGISTRATION
        regDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });
    return Login;
};
