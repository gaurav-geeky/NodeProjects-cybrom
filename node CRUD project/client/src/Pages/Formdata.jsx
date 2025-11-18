import React, { useState } from 'react'
import axios from "axios";

function Form() {
    const [data, setData] = useState({});

    let handleinput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    let handelSubmit = async (e) => {
        e.preventDefault();
        let api = `${import.meta.env.VITE_BACKEND_URL}/save`;
        const resp = await axios.post(api, data);
        console.log(data);
        setData({});       // now the form WILL clear
        alert(resp.data);
    };

    return (
        <>
            <div className='min-h-[90vh] border-1 border-black' >
                <h1 className='text-purple-600 font-bold text-xl'>
                    here You can fill Student's information
                </h1>

                <form className='border-1 w-100 m-5' onSubmit={handelSubmit}>

                    <p className='m-2'>
                        <label>Name : </label>
                        <input
                            className='border-1 pl-1'
                            name='name'
                            type="text"
                            value={data.name || ""}
                            onChange={handleinput}
                        />
                    </p>

                    <p className='m-2'>
                        <label>Roll No. : </label>
                        <input
                            className='border-1 pl-1'
                            name='rollno'
                            type="text"
                            value={data.rollno || ""}
                            onChange={handleinput}
                        />
                    </p>

                    <p className='m-2'>
                        <label>City : </label>
                        <input
                            className='border-1 pl-1'
                            name='city'
                            type="text"
                            value={data.city || ""}
                            onChange={handleinput}
                        />
                    </p>

                    <p className='m-2'>
                        <label>Fees : </label>
                        <input
                            className='border-1 pl-1'
                            name='fees'
                            type="text"
                            value={data.fees || ""}
                            onChange={handleinput}
                        />
                    </p>

                    <input
                        className='bg-amber-200 p-2 rounded-4xl'
                        type="submit"
                    />

                </form>
            </div>
        </>
    );
}

export default Form;
