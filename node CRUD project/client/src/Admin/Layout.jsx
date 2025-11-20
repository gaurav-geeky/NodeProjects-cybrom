import React from 'react'
import { Outlet } from 'react-router-dom'

// admin's layout 
const Layout = () => {
  return (
    <div  className='h-screen bg-green-100'>
        
      <Outlet/> 

    </div>
  )
}

export default Layout
