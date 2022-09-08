const express = require("express");
const controller = require("../../controllers/budget.controller.js");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const request = await controller.getBudgetDB();
		res.json(request.data);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
