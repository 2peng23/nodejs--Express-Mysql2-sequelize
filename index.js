const express = require("express");
const route = require("./router");
const app = express();
require("dotenv").config();

app.use(express.json());
app.listen(process.env.APP_PORT, () => {
  console.log(`App is running on port ${process.env.APP_PORT}`);
});

// product routes
app.use("/api", route);
