import axios from 'axios';
import React, { useState } from 'react'

const Image = () => {
    const [data, setdata] = useState(""); 

    const handleFile = (e) => {
        const file = e.target.files[0];  // files[0] single file , 
                                //  e.target.files ___ whole file list
        console.log(file); 
        setdata(file); 
        console.log("myfile : ", data); 
    }

    const handleupload = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/multer`;

        const formdata = new FormData();
        formdata.append("mydata", data); 
        const response = await axios.post(api, formdata); 
        console.log(response.data); 
    }

  return (
    <>
      <div>

        <h1> Multer file upload </h1>
        upload here : &ensp; 
        <input type="file" onChange={handleFile} />
        <button onClick={handleupload}> paste </button>
        
      </div>
    </>
  )
}

export default Image
