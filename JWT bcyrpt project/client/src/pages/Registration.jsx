import React, { useState } from 'react'
import axios from "axios";

// 1st registration  -->   login  -->  direct to HOme Page.. 

const Registration = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/registration`;
    const response = await axios.post(api, { name, email, password });
    alert(response.data);
  }

  return (
    <>
      <div>
        <h1> User Registration.. </h1>

        Enter username : <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
        <br />
        Enter userEmail : <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} />
        <br />
        Enter password : <input type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <br />
        <button onClick={handleSubmit}> Register now..</button>

      </div>
    </>
  )
}

export default Registration;

