

import axios from 'axios';
import React, { useState } from 'react'

const MultipleFiles = () => {
    const [input, setinput] = useState({}); // text
    const [image, setimage] = useState(""); // file

    const handleInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setinput(values => ({ ...values, [name]: value }));
        console.log(input);
    }

    const hanldeImage = async (e) => {
        const myimg = e.target.files;
        console.log(myimg);
        setimage(myimg);
    }

    const handlesave = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/multer/multiplefiles`;
        const formdata = new FormData();

        for (const key in input) {
            formdata.append(key, input[key]);
        }
        for (let i = 0; i < image.length; i++) {
            formdata.append("imagefile", image[i]);
        }
        const response = await axios.post(api, formdata);
        alert(response.data);
    }


    return (
        <>
            <div>

                <h2> multiple files upload in cloudinary..</h2>
                <h1> User Registration </h1>

                Enter Name <input type="text" name='name' onChange={handleInput} />
                <br /> <br />

                Enter Email <input type="text" name='email' onChange={handleInput} />
                <br /> <br />

                Enter Subject <input type="text" name='subject' onChange={handleInput} />
                <br /> <br />

                Upload ur Image <input type="file" multiple onChange={hanldeImage} />
                <br /> <br />

                <button onClick={handlesave}>save it!</button>

            </div>
        </>
    )
}

export default MultipleFiles; 
