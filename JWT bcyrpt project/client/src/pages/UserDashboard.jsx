import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const name = localStorage.getItem("uname");
    const email = localStorage.getItem("uemail");
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("uname")) {
            navigate("/");
        }
    }, [])

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <div>
                <h1>Welcome to the User's Dashboard</h1>

                <p> Welcome {name}, {email} </p>
                <button onClick={logout}>logout</button>

                <ul>
                    <li>products</li>
                    <li>about</li>
                    <li>service</li>
                </ul>

                <footer>I am footer</footer>

            </div>
        </>
    )
}

export default UserDashboard
