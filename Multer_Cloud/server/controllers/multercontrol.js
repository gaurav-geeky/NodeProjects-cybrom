const multiModel = require("../models/multimodel");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../Cloudinary");


const Home = async (req, res) => {
    res.send("home page ")
}

// Set up Cloudinary storage for multer
// storage config
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "myUploads", // name of folder in cloudinary
        allowedFormats: ["jpg", "jpeg", "png", "webp"],
    },
});

// multer instance
const uploadCloud = multer({ storage: storage }).array('imagefile', 10);


const Multiupload = async (req, res) => {

    uploadCloud(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        const { name, email, subject } = req.body;
        const imageUrls = req.files.map(file => file.path);

        const multi = await multiModel.create({
            name: name,
            email: email,
            subject: subject,
            images: imageUrls,
            defaultImage: imageUrls[0]
        })
        console.log("okk it is running cloud name issue tha..")

    }
    );
    res.send("data save!");
}


module.exports = {
    Home,
    Multiupload
}