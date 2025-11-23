const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose'); 
const cors = require("cors"); 
const bodyparser = require("body-parser"); 
const authorroute = require("./route/Authorroute"); 

mongoose.connect("mongodb://127.0.0.1:27017/relationshps").then(() => {
    console.log(`db connect successfully ..`);
}).catch((error) => {
    console.log("db error : ", error);
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors()); 

app.use("/author", authorroute)

const port = process.env.port || 8990
app.listen(port, () => {
    console.log(`server relation runs on ${port}`)
})

