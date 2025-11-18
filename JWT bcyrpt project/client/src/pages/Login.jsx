import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/login`;
    const response = await axios.post(api, { email, password });

    alert(response.data.msg);
    console.log("token : ", response.data.token);

    localStorage.setItem("token", response.data.token); 
    navigate("/home"); 
  }

  return (
    <>
      <div>
        <h1> Login page ... login here ..</h1>

        Enter userEmail : <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} />
        <br />
        Enter password : <input type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <br />
        <button onClick={handleSubmit}> Login </button>
      </div>
    </>
  )
}

export default Login;  
