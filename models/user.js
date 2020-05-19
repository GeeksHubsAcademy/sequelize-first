'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            required: true,
        },
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};