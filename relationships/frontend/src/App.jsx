import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './ManyPage/Layout'
import Home from './ManyPage/Home'
import OnetoMany from './ManyPage/OnetoMany'
import AuthorShow from './ManyPage/AuthorShow'



const App = () => {
  return (
    <>
      <div>

        <Routes>
          <Route path='/' element={<Layout/> }>

            <Route index element={<Home/>} />
            <Route path='/onetomany' element={<OnetoMany/>} />
            <Route path='/authortobook' element={<AuthorShow/>} />


          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App; 
