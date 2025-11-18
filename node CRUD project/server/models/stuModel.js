const mongoose = require('mongoose');

const stuSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    city: String,
    fees: Number,
})

module.exports = mongoose.model("studentDB", stuSchema); 


