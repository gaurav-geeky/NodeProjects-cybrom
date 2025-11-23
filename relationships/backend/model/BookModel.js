const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number, 
    authorid: { type: mongoose.Schema.Types.ObjectId, ref: "book" }
});

module.exports = mongoose.model("book", bookSchema);

