const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

//config dotenv file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
