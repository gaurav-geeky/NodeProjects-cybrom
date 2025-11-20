import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Adminlog = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    let handleinput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    let handelSubmit = async (e) => {
        e.preventDefault();
        let api = `${import.meta.env.VITE_BACKEND_URL}/adminlog`;
        const response = await axios.post(api, data);
        alert(response.data.msg);

        localStorage.setItem("aname", response.data.Admin.name);
        localStorage.setItem("aemail", response.data.Admin.email);

        setData({});       // now the form WILL clear
        navigate("/stu-dash")
    };

    return (

        <>
            <div className=''>
                <nav className='border-1 border-black'>
                    <h1 className='text-5xl'>Students Database Application</h1>
                </nav>

                <div>

                    <form className='border-1 w-100 m-5 ' onSubmit={handelSubmit}>

                        <p className=''>
                            <label>Enter Email : </label>
                            <input
                                className='border-1 p'
                                name='email'
                                type="text"
                                value={data.email || ""}
                                onChange={handleinput}
                            />
                        </p>

                        <p className=''>
                            <label>Enter Password : </label>
                            <input
                                className='border-1 p'
                                name='password'
                                type="text"
                                value={data.password || ""}
                                onChange={handleinput}
                            />
                        </p>

                        <button onClick={handelSubmit}> Login </button>
                    </form>
                </div>

                {/* FOOTER */}
                <footer
                    id="studentfooter"
                    className="w-full h-20 bg-white shadow-inner flex items-center justify-between px-8 mt-auto"
                >
                    <p>© All rights reserved.</p>
                    <p>Registered Office: 23 Old Bunglow Farm House</p>
                    <p>Company reserves all rights.</p>
                </footer>

            </div>
        </>
    )
}

export default Adminlog

