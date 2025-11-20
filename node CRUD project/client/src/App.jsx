import { Route, Routes } from "react-router-dom"

// students
import Home from "./Pages/Home"
import About from "./Pages/About"
import Form from "./Pages/Formdata"
import Display from "./Pages/Display"
import Search from "./Pages/Search"
import Update from "./Pages/Update"
import Edit from "./Pages/Edit"
import StuDash from "./Pages/StuDash"


// admin 
import Adminlog from "./Admin/Adminlog"
import Layout from "./Admin/Layout"



function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Adminlog/> } />
          </Route>
        </Routes>

        <Routes>
          <Route path="stu-dash" element={<StuDash />}>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />
            <Route path="display" element={<Display />} />
            <Route path="search" element={<Search />} />
            <Route path="update" element={<Update />} />
            <Route path="edit/:id" element={<Edit />} />

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
