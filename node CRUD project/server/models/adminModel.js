const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    city: String,
    fees: Number,
})

module.exports = mongoose.model("admin", adminSchema); 


