import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="home">Home</Link> |
            <Link to="registration">Registration</Link> |
            <Link to="login">Login</Link> |

            <hr />

            <div style={{ height: "85vh"}}>
                <Outlet />
            </div>


            <hr />
            www.jsonWebToken&Bcrypt.com 2025.
        </>
    )
}


export default Layout;