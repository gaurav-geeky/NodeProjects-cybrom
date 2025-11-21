

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const bodyparser = require('body-parser');
const multer = require('multer');
const multerRoute = require("./routes/multerRoute"); 
// 

mongoose.connect(process.env.DBCONN).then(() => {
  console.log("DB for multer connected !");
})


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(cors());

// router ways ..
app.use("/multer", multerRoute); 


// Configure multer storage  
// single file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}- ${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myimg"), (req, res) => {
  console.log(req.file.filename);
  res.send("ok file uploaded !!");
})

//   ************* ************************ //
const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imgsave/");  // create this folder in which file saves
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upImg = multer({ storage: storage1 }); 
// Left side = multer option name    // Right side = your variable name

app.post("/multer", upImg.single("mydata"), (req, res) => {
  console.log(req.file.filename);
  res.send("ok image uploaded...");
});




/////////// 

const port = process.env.PORT || 8999;

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});

