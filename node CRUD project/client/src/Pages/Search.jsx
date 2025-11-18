import axios from 'axios';
import React, { useState } from 'react'

function Search() {

    const [rollno, setRollno] = useState("");

    const [mydata, setMydata] = useState([])

    const handelSubmit = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/search`;
        const response = await axios.post(api, { rollno: rollno })
        console.log(response.data);
        setMydata(response.data);
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr >
                    <td className='border-1'> {key.rollno} </td>
                    <td className='border-1'> {key.name} </td>
                    <td className='border-1'> {key.city} </td>
                    <td className='border-1'> {key.fees} </td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div className='min-h-[90vh] border-1  '>

                <h1> Search data here..</h1>
                Enter Roll No :
                <input 
                    className='border-1' type="text"
                    name='rollno' value={rollno}
                    onChange={(e) => setRollno(e.target.value)}
                />

                <button className='border-1 text-red-500 font-bold bg-amber-300 ml-2' onClick={handelSubmit}>Search it</button>

                <hr />

                {mydata.length > 0 &&
                    <table className='border-1 text-center w-100 m-8 ml-auto mr-auto'>
                        <tr >
                            <th> Roll No. </th>
                            <th> Name</th>
                            <th> City</th>
                            <th> Fees</th>
                        </tr>
                        {ans}
                    </table>
                }

            </div>
        </>
    )
}

export default Search


