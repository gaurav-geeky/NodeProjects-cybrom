
# controller 

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stuModel = require("../models/stuModel")

const homepg = (req, res) => {
    res.send("home page ");
}

# 1

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
##   👇 console.log(passwordHash);  // $2b$10$6V.9mvo7TbHv.DotacIxUO6Y5z5UO4D0uVfgjrVkb1Do8OcMnkHAm 
##  👇 password becomes secret code.. 


# 2

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
## ####### 👇
user : { info }
console passvalidate :  false

(changable)token --->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTllMDBhZGVlNGUxODkzYWQzNzhlZSIsImlhdCI6MTc2MzMwNDU2MiwiZXhwIjoxNzYzMzkwOTYyfQ.OmoOK9qLSXihRMnN2iMoYHKWTGkVU5GINC35xiYHhPw   
1 para alway same , 2nd half, 3 different. 

# ######👆




# 3 
const userAuth = async (req, res) => {
    console.log("my header below \n", req.headers); 
    
######  👇

my header below 
 {
  host: 'localhost:8999',
  connection: 'keep-alive',
  'content-length': '2',
  'sec-ch-ua-platform': '"Android"',  
  'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Mobile Safari/537.36',  
  accept: 'application/json, text/plain, */*',
  # auth tokens --->  req.header('auth-token') --->
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTllMDBhZGVlNGUxODkzYWQzNzhlZSIsImlhdCI6MTc2MzM3NDY1MSwiZXhwIjoxNzYzNDYxMDUxfQ.7g89ni7i-GDWkURyU9nQxkNTjDfxOJtDqEIWkdS951g',
  'content-type': 'application/json', 
  'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
  'sec-ch-ua-mobile': '?1',
  origin: 'http://localhost:5174',    
  'sec-fetch-site': 'same-site',      
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer: 'http://localhost:5174/',  
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en,hi;q=0.9,cs;q=0.8'
}

##### 👆

const decode = await jwt.verify(token, "gaur@123");
console.log("decode --> ", decode)

#  👆 decode -->  { id: '6919e00adee4e1893ad378ee', iat: 1763374651, exp: 1763461051 }


}





module.exports = {
    homepg,
    StuRegister,
    StuLogin,
    userAuth, 

}

