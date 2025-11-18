import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  // now authentication function where you are login or not which checks token if it is right then you can LOGIN. 

  const userAuthenticate = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/userauth`;
    const token = localStorage.getItem("token");

    // 51 : 30 ...   api,  data,  headers me data (like something written over envelop)

    if (token) {
      const response = await axios.post(api, {}, {
        headers: { "auth-token": token }
      });

      console.log(response.data);
      alert(response.data.msg);

      localStorage.setItem("uname", response.data.user.name);
      localStorage.setItem("uemail", response.data.user.email);
      navigate("/dashboard");
    }
    else {
      console.log("No token has been found in Browser !"); // 20
    }

  }

  // authentication always runs to check whether there is a token or not . 
  useEffect(() => {
    userAuthenticate();
  }, [])

  return (
    <>
      <div>
        <h1> Welcome to home page.. </h1>
      </div>
    </>
  )
}

export default Home; 
