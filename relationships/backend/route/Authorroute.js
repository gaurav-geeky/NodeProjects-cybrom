
const express = require("express"); 
const route = express.Router(); 
const authorController = require("../controller/Authorcontroller")

route.get("/home", authorController.Home); 
route.post("/authorsave", authorController.AuthorSave); 
route.get("/displaymany1", authorController.AuthortoBook); 
route.post("/savemany1", authorController.saveMany1); 



module.exports = route

