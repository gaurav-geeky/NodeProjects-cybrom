import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'


function Display() {

    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/display`
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, [])

    const ans = mydata.map((key) => {
        return (
            <>
                <tr className='text-blue-700 text-center border-1'>
                    <td className='p-0.5'> {key.name} </td>
                    <td className='p-0.5'> {key.rollno} </td>
                    <td className='p-0.5'> {key.city} </td>
                    <td className='p-0.5'> {key.fees} </td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div className='min-h-[90vh] border-1 ' >
                <h1> Display record here..</h1>
                <hr />
                <table className='border-1 w-2xl m-10' >
                    <tr className='border-1 border-amber-900'>
                        <th className=' bg-amber-200'> Name</th>
                        <th className=' bg-red-400'> Roll NO.</th>
                        <th className=' bg-pink-400'> City </th>
                        <th className=' bg-orange-400'> Fees </th>
                    </tr>
                    {ans}
                </table>
            </div>
        </>
    )
}

export default Display; 
