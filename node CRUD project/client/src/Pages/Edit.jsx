import axios from 'axios';
import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {

    const { id } = useParams();
    const [mydata, setMydata] = useState({});

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/editdisplay/${id}`;
        const response = await axios.get(api);
        console.log("data to be change : ", response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }))
        console.log("updated data : ", mydata);
    }
    const handleSubmit = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/editsave`;
        const response = await axios.post(api, mydata);
        alert(response.data.msg);
    }

    return (
        <>
            <div className='min-h-[90vh] border-1  '>
                <h1> User can Edit their Data here only </h1>
                <h1> my edit id : {id} </h1>
                <br /> <br /> <br />

                Edit name: <input type="text" name='name' value={mydata.name} onChange={handleInput} className='border-1' />
                <br />
                Edit rollno:  <input type="text" name='rollno' value={mydata.rollno} onChange={handleInput} className='border-1' />
                <br />
                Edit city: <input type="text" name='city' value={mydata.city} onChange={handleInput} className='border-1' />
                <br />
                Edit fees: <input type="text" name='fees' value={mydata.fees} onChange={handleInput} className='border-1' />
                <br />

                <button onClick={handleSubmit} className='border-1 bg-blue-300'> save it! </button>

            </div>
        </>
    )
}

export default Edit
