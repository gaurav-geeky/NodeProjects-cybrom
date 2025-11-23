import React, { useState } from 'react'
import axios from "axios"

const OnetoMany = () => {
  const [data, setdata] = useState({});

  const handleinput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  }

  const handlesubmit = async () => {
    let api = `${import.meta.env.VITE_BACK}/author/authorsave`;
    const response = await axios.post(api, data);
    alert(response.data);
  }
  // here path is /auth / autorsave because in backend server app.use("/author", route)
  

  return (
    <>
      <div>
        <h2>One to One relationship..</h2>

        enter Author : <input type="text" name='name' onChange={handleinput} />
        <br /> <br />
        enter Email : <input type="text" name='email' onChange={handleinput} />
        <br /> <br />
        enter Booktitle : <input type="text" name='booktitle' onChange={handleinput} />
        <br /> <br />
        enter price : <input type="text" name='price' onChange={handleinput} />
        <br /> <br />

        <button onClick={handlesubmit}>Save </button>

      </div>
    </>
  )
}

export default OnetoMany; 
