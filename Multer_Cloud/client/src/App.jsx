import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Multer from "./pages/Multer";
import Image from "./pages/Image";
import MultipleFiles from "./pages/MultipleFiles";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route path="multer" element={<Multer />} />
          <Route path="image" element={< Image />} />
          <Route path="multiplefile" element={< MultipleFiles />} />

        </Route>
      </Routes>




    </>
  )
}

export default App;