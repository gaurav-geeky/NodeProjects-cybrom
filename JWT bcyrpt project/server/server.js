
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require('body-parser'); 
const StuRoute = require("./routes/stuRoute"); 


mongoose.connect(process.env.DBCONN).then(() => {
    console.log("DB for jwt connected Succesfully!");
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(cors());

app.use("/students", StuRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server run on port ${port}`);
}); 

