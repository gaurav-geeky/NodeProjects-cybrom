import axios from 'axios';
import React, { useState } from 'react'

const Multer = () => {

    const [image, setImage] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log("myimage : ", image);
    }

    const handleUpload = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/upload`;

        const formdata = new FormData(); 
        formdata.append("myimg", image); 
        const response = await axios.post(api, formdata); 
        console.log(response.data); 
    }

    return (
        <>
            <div style={{ backgroundColor: 'lightblue', height: "70vh"}}>

                <h1> Upload files using Multer</h1>
                upload file here : &emsp; 

                <input type="file" onChange={handleImage} />

                <button onClick={handleUpload}>Upload..</button>

            </div>
        </>
    )
}

export default Multer
