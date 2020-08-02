
// js skripta koja pomoću opcije 'sequelize' pravi konekciju s bazon 
// u bazi se nalazi tabela User sa kolonama ime, e-mail, password, brojTelefona 
const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const User = sequelize.define("user",{
        ime :  Sequelize.STRING,
        email : Sequelize.STRING,
        password: {
            type: Sequelize.STRING,
        },
        brojTelefona : Sequelize.STRING,
    })
    return User;
};