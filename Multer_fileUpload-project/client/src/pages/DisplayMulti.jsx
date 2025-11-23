import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const DisplayMulti = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/multer/displaymulti`;
        const response = await axios.get(api);
        console.log(response.data.msg);
        setMydata(response.data.info)
    }

    useEffect(() => {
        loadData();
    }, []);

    // get data from model using map
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td style={{ border: '1px solid black',  }} >
                        <img src={key.defaultImage} style={{ width: "200px", height: "160px" }} />
                    </td>

                    <td style={{ padding: "5px"}}>

                        {key.images.map((each) => {
                            return (<img src={each} height="50px" width="auto" style={{display: 'flex', alignItems: 'center' ,flexDirection: "column" , padding: "5px", }} />
                            )
                        })}
                    </td>

                    <td style={{ border: '1px solid black' }} > {key.name} </td>
                    <td style={{ border: '1px solid black' }} > {key.email} </td>
                    <td style={{ border: '1px solid black' }} > {key.subject} </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <div className='h-full bg-amber-300' >

                <h1> showing data of multiple upload 1st file save in cloud then get them in mongo db then displaying here..</h1>

                <table align='center' width={500} border={1} style={{ border: '1px solid black' }} >
                    <tr>
                        <th style={{ border: '1px solid black' }}> image</th>
                        <th style={{ border: '1px solid black' }}>all image</th>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}> Email</th>
                        <th style={{ border: '1px solid black' }}> Subject</th>
                    </tr>
                    {ans}
                </table>

            </div>
        </>
    )
}

export default DisplayMulti;
