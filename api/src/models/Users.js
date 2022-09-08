const { Datatypes } = require("sequelize");
const { sequelize } = require("../db");

module.exports = sequelize => {
	const Users = sequelize.define("Users", {
		id: {
			type: Datatypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: Datatypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: Datatypes.STRING,
			allowNull: false,
		},
	});
	return Users;
};
