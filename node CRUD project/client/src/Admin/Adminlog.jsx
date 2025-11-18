import React from 'react'
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
        let api = `${import.meta.env.VITE_BACKEND_URL}/save`;
        const resp = await axios.post(api, data);
        console.log(data);
        setData({});       // now the form WILL clear
        alert(resp.data);
        navigate("/stu-dash")
    };

    return (

        <>
            <div>


                <form className='border-1 w-100 m-5' onSubmit={handelSubmit}>

                    <p className=''>
                        <label>Name : </label>
                        <input
                            className='border-1 p'
                            name='email'
                            type="text"
                            value={data.email || ""}
                            onChange={handleinput}
                        />
                    </p>

                    <p className=''>
                        <label>Roll No. : </label>
                        <input
                            className='border-1 p'
                            name='password'
                            type="text"
                            value={data.password || ""}
                            onChange={handleinput}
                        />
                    </p>
                </form>

            </div>
        </>
    )
}

export default Adminlog

