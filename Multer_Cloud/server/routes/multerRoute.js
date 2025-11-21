const express = require("express"); 
const route = express.Router(); 
const multiControl = require("../controllers/multercontrol"); 

route.get("/home", multiControl.Home)

route.post("/multiplefiles", multiControl.Multiupload )


module.exports = route; 