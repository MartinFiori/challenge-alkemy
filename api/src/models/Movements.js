const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	const Movements = sequelize.define("Movements", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		concept: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		type: {
			type: DataTypes.ENUM("income", "outcome"),
			allowNull: false,
		},
	});
	return Movements;
};
