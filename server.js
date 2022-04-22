const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/*var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));*/
const db = require("./src/app/api/models");

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./src/app/api/routes/room.routes")(app);
require("./src/app/api/routes/user_input.routes")(app);
// set port, listen for requests
const PORT = 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});