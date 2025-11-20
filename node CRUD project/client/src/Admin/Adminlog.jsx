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
    <div className="w-full min-h-screen bg-orange-500 flex flex-col">

      {/* TOP HEADING */}
      <h1 className="text-center text-4xl font-bold text-white py-6">
        Students Database Application
      </h1>

      {/* CENTER WRAPPER */}
      <div className="flex-1 flex items-center justify-center">

        {/* MAIN LOGIN BOX */}
        <div className="w-[90%] md:w-[75%] lg:w-[65%] h-[75vh] bg-white rounded-2xl shadow-xl flex overflow-hidden">

          {/* LEFT SIDE */}
          <div className="hidden md:flex w-1/2 bg-gray-900 text-white items-center justify-center px-6">
            <h1 className="text-2xl font-semibold">
              Turn your projects into reality.
            </h1>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
            <form className="w-full max-w-sm space-y-5" onSubmit={handelSubmit}>
              
              <h1 className="text-3xl font-bold text-center mb-4">Admin Login</h1>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  name="email"
                  type="text"
                  value={data.email || ""}
                  onChange={handleinput}
                  className="w-full border p-2 rounded-md outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  value={data.password || ""}
                  onChange={handleinput}
                  className="w-full border p-2 rounded-md outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </>
);



}

export default Adminlog

