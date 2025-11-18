import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import About from "./Pages/About"
import Form from "./Pages/Formdata"
import Display from "./Pages/Display"
import Search from "./Pages/Search"
import Update from "./Pages/Update"
import Edit from "./Pages/Edit"
import Lay from "./Admin/Lay"
import Adminlog from "./Admin/Adminlog"

// admin 



function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Lay />}>
            <Route index element={<Adminlog/> } />
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/display" element={<Display />} />
            <Route path="/search" element={<Search />} />
            <Route path="/update" element={<Update />} />
            <Route path="/edit/:id" element={<Edit />} />

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
