require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const sequelize = require("./db");
const models = require('./models/models')
const cors = require('cors')
const app = express();
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHendlingMiddleware')

app.use(cors());
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

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