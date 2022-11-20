require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const sequelize = require("./db");
const app = express();
const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
