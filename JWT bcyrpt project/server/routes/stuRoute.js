
const express = require("express");
const route = express.Router();
const StuController= require("../controllers/stuController");

route.get("/home", StuController.homepg); 

route.post("/registration", StuController.StuRegister); 
route.post("/login", StuController.StuLogin); 
route.post("/userauth", StuController.userAuth); 


module.exports = route; 

