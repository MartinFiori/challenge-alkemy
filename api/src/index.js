const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const { sequelize } = require("./db.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const { Movements, Users } = require("./models");

// Users.hasMany(Movements, { foreignKey: "id", sourceKey: "id" });
// Movements.belongsTo(Users, { foreignKey: "id", targetId: "id" });

const { Movements } = require("./models/Movements.js");
const { Users } = require("./models/Users.js");

Movements.belongsTo(Users, { foreignKey: "User_movements" });
Users.hasMany(Movements, { foreignKey: "User_movements" });

const PORT = process.env.PORT || 3001;

async function main() {
	try {
		await sequelize.sync({ force: true });
		console.log("Connected!");
		app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
}

main();
