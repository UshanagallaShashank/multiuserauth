const express = require('express');
const path = require('path')

const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
if(mongoose.connect("mongodb://localhost:27017/one-click"))console.log("connected to database");

const port = parseInt(process.env.PORT) || process.argv[3] || 50001

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');


const authRoute=require("./routes/authRoute")

app.use("/api",authRoute);
app.use("/",(req,res)=>{
  res.send("server")
})

app.listen(port,()=>{
  console.log("connected to server",port);
})