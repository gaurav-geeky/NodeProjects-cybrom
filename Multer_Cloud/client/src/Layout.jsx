import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="multer">Multer</Link> |
            <Link to="image">Image jsx</Link> |
            <Link to="multiplefile"> Multiple_upload </Link> |

            <hr />

            <div style={{ height: "85vh"}}>
                <Outlet />
            </div>


            <hr />
            www.multer_Cloudinary_file upload.com 2025.
        </>
    )
}


export default Layout;