const express = require("express");
const budgetRoutes = require("./budget/budget.js");
const router = express.Router();

router.use("/budget", budgetRoutes);

module.exports = router;
