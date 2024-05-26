const express = require("express");
const app = express();
const dotenv = require("dotenv");

const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const CategoryRoute = require("./routes/category")

dotenv.config();
mongoose.connect(process.env.MONGOURL)
.then(()=>console.log("Foodly Database Connected"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/category", CategoryRoute);

app.listen(process.env.PORT || 6013, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  console.log("Foodly Database Connected");
});