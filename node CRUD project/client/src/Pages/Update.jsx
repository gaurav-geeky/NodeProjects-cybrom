import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {

    const [mydata, setMydata] = useState([]);
    let navigate = useNavigate();

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/updatedata`
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(() => {
        loadData();
    }, [])

    const myDel = async (id) => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/updatedelete?id=${id}`
        const response = await axios.delete(api);
        alert(response.data.msg);
        loadData();
    }

    let myEdit = async (id) => {
        navigate(`/edit/${id}`)
        console.log("ok id come to edit pg.")
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr className='text-gray-700 text-center border-1'>
                    <td> {key.name} </td>
                    <td> {key.rollno} </td>
                    <td> {key.city} </td>
                    <td> {key.fees} </td>
                    <td >
                        <a className=' text-red-500' href="#" onClick={() => { myEdit(key._id) }}> Edit me </a>
                        &ensp;
                        <a className=' text-red-500' href="#" onClick={() => { myDel(key._id) }}> Deleter </a>
                    </td>
                </tr>
            </>
        )
    });

    return (
        <>
            <div className='min-h-[90vh] border-1'>

                <h1> Update student data here..</h1>
                <table className='border-1 w-2xl m-10' >
                    <tr>
                        <th> Name </th>
                        <th> Roll no. </th>
                        <th> City </th>
                        <th> Fees </th>
                        <th> Updates </th>
                    </tr>
                    {ans}
                </table>

            </div>
        </>
    )
}

export default Update; 
