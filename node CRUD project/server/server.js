const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');  
const stuRoute = require('./routes/stuRoutes'); 
const cors = require('cors');  
require("dotenv").config(); 


mongoose.connect(process.env.DBCONN).then( ()=> {
    console.log("DB Mongoose connected successfully.."); 
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); 
 

app.use("/", stuRoute);


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running at  port.. ${port}`);
}) 


