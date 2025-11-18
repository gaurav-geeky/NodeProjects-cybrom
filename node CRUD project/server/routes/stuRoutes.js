
const express = require('express');  
const route = express.Router(); 
const stuController = require('../controllers/stuController')

route.get('/home', stuController.homePg)
route.post('/save', stuController.savePg)
route.get('/display', stuController.displayPg)
route.post('/search', stuController.dataSearch)

route.get('/updatedata', stuController.updateDisplay)
route.delete('/updatedelete', stuController.updateDelete)

route.get('/editdisplay/:id', stuController.editData); 
route.post('/editsave', stuController.editSave); 

// admin data login
// route.post('/admin', stuController.adminInfo); 


module.exports = route; 

