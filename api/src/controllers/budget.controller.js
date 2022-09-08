const axios = require("axios");
const { Activity } = require("../db.js");

const getBudgetDB = async () => {
	const all = await Activity.findAll();
	return all;
};

module.exports = {
	getBudgetDB,
};
