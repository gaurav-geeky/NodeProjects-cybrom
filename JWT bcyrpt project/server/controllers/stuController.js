const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stuModel = require("../models/stuModel")

const homepg = (req, res) => {
    res.send("home page ");
}

const StuRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10); // 23 min

    const user = await stuModel.create({
        name: name,
        email: email,
        password: passwordHash,
    })
    res.send("user successfully registered !!");

}
// console.log(passwordHash);  // $2b$10$6V.9mvo7TbHv.DotacIxUO6Y5z5UO4D0uVfgjrVkb1Do8OcMnkHAm 
// password becomes secret code.. 

const StuLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await stuModel.findOne({ email: email }); // find

    if (!user) {
        res.status(400).send({ msg: "Invalid Email!" });
    }

    const passValidate = await bcrypt.compare(password, user.password);

    if (!passValidate) {
        res.status(400).send({ msg: "Invalid Password !" });
    }
    console.log("user : ", user);
    console.log("passvalidate : ", passValidate);   // validation only 36 min.

    // if ur right user..(parameter) --->  payload , secrete key (.env file me) , expire(token expire in tym. client me jayega);
    //  jwt has got nothing to do with login things it is different. 

    const token = jwt.sign({ id: user._id }, "gaur@123", { expiresIn: "1d" });
    res.status(200).send({ token: token, msg: "user successfully login" });

    // payload : after login the data we are carrying.
    // only genrating new token. 
    // then come back
}

/* 
user : { info }
console passvalidate :  false

(changable)token --->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTllMDBhZGVlNGUxODkzYWQzNzhlZSIsImlhdCI6MTc2MzMwNDU2MiwiZXhwIjoxNzYzMzkwOTYyfQ.OmoOK9qLSXihRMnN2iMoYHKWTGkVU5GINC35xiYHhPw   
1 para alway same , 2nd half, 3 different. 
*/

const userAuth = async (req, res) => {
    // console.log(req.headers);
    const token = req.header('auth-token');

    const decode = await jwt.verify(token, "gaur@123"); // secrete key se verify kr variable me dala

    console.log(decode.id) // dot method se ID jo jwt token bante samay user id bheji wo check ki 

    const user = await stuModel.findById(decode.id).select("-password")
    console.log(user); 
    res.status(200).send({user: user, msg: "ok token is verified !!"}); 
}


module.exports = {
    homepg,
    StuRegister,
    StuLogin,
    userAuth,

}

