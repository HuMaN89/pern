require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const sequelize = require("./db");
const models = require('./models/models')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).json({message: 'WorKinG!!!'})
})


const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();