const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();
const cookieParse = require('cookie-parser')
//db connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Failed", err));

//middleware

app.use(express.json());
app.use(cookieParse());
app.use(express.urlencoded({extended:false}))
app.use("/", require("./routes/auth"));
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
