const mongoose = require("mongoose");
const multerSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    images: [String], 
    defaultImage: String 
})
module.exports= mongoose.model("multimulter", multerSchema);



