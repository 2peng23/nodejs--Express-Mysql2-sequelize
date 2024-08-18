const db = require("./config/db");
const product = require("./models/product");

db.sync({ force: true }).then(() => {
  console.log("Database and tables created!");
});
