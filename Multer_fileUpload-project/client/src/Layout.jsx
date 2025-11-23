import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="multer">Multer</Link> |
            <Link to="image">Image jsx</Link> |
            <Link to="multiplefile"> Multiple_upload </Link> |
            <Link to="displaymulti"> Multi_Display </Link> |


            <hr />

            <div className="" style={{ height: "85vh"}}>
                <Outlet />
            </div>


            <hr />
            www.multer_Cloudinary_file upload.com 2025.
        </>
    )
}


export default Layout;