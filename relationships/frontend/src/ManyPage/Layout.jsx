import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <div >
                <h2 style={{backgroundColor: 'lightcoral', height: "5vh", display: 'flex', justifyContent: "start", alignItems: 'center', gap: "40px"}} >

                    <NavLink to="/"> Home </NavLink> 
                    <NavLink to="/onetomany"> Many </NavLink>  
                    <NavLink to="/authortobook"> ManyShow1 </NavLink>  
                </h2>

                <main style={{ height: "90vh"}} >
                    <Outlet />
                </main>

                <footer style={{ height: "5vh"}} >
                    I am footer box
                </footer>
            </div>
        </>
    )
}

export default Layout; 
