const authormodel = require("../model/Authormodel");
const bookmodel = require("../model/BookModel");

const Home = (req, res) => {
    res.send("<h1> hey Home page of relationships topic <h1/>");
}

const AuthorSave = async (req, res) => {
    const { name, email, booktitle, price } = req.body;
    const author = await authormodel.create({
        authorname: name,
        email: email,
    })
    const book = await bookmodel.create({
        title: booktitle,
        price: price,
        authorid: author._id
    })
    await authormodel.findByIdAndUpdate(author._id, {
        $push: { booksid: book._id }
    })

    res.send("okk data save in author, book");
}

// display 1
const AuthortoBook = async (req, res) => {
    console.log("author to book show 1");
    const show1 = await authormodel.find().populate("booksid");
    res.send({ author: show1, msg: "ok I got book detail according to author.." });
}

// add more books
const saveMany1 = async (req, res) => {
    const { authId, bookname, price } = req.body;

    const book = await bookmodel.create({
        title: bookname,
        price: price,
        authorid: authId,
    })
    await authormodel.findByIdAndUpdate(authId, { $push: { booksid : book._id} })

    res.send("okk book has been added.");
}

module.exports = {
    Home,
    AuthorSave,
    AuthortoBook,
    saveMany1,

}


