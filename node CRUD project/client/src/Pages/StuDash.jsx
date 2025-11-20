import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StuDash = () => {

  const name = localStorage.getItem("aname")
  return (
    <>
      <div id='studentdash' className="min-h-screen flex flex-col bg-gray-100">

        {/* HEADER */}
        <div 
          id='studentheader' 
          className="w-full h-20 bg-white shadow-md flex justify-between items-center px-8 mb-6"
        >
          <h1 className="text-2xl font-semibold">Students's Dashboard</h1>
          <h4 className="text-lg font-medium">Welcome {name}</h4>
        </div>

        {/* MAIN CONTAINER */}
        <div 
          id='studentcontainer'
          className="w-full  flex flex-row gap-6 px-8 mb-6 bg-red-400"
        >

          {/* MENU – 15% */}
          <div className="studentmenu w-[15%] bg-amber-100 rounded-lg shadow-md p-5 flex flex-col space-y-4">

            <NavLink className="text-lg hover:text-blue-600" to="/stu-dash">Home</NavLink>

            <NavLink className="text-lg hover:text-blue-600" to="about">About</NavLink>
            <NavLink className="text-lg hover:text-blue-600" to="form">Form</NavLink>
            <NavLink className="text-lg hover:text-blue-600" to="display">Display</NavLink>
            <NavLink className="text-lg hover:text-blue-600" to="search">Search</NavLink>
            <NavLink className="text-lg hover:text-blue-600" to="update">Update</NavLink>
            <NavLink className="text-lg hover:text-blue-600" to="edit/:id">Edit</NavLink>
          </div>

          {/* STUDENT DATA – 85% */}
          <div className="studentdata w-[85%] bg-white rounded-lg shadow-md p-6">
            <Outlet />
          </div>

        </div>

        {/* FOOTER */}
        <footer 
          id="studentfooter" 
          className="w-full h-20 bg-white shadow-inner flex items-center justify-between px-8 mt-auto"
        >
          <p>© All rights reserved.</p>
          <p>Registered Office: 23 Old Bunglow Farm House</p>
          <p>Company reserves all rights.</p>
        </footer>

      </div>
    </>
  )
}

export default StuDash;



// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'

// const StuDash = () => {

//   const name = localStorage.getItem("aname")
//   return (
//     <>
//       <div id='studentdash'>

//         <div id='studentheader'>

//           <h1> Students's Dashboard</h1>
          
//           <h4> welcome {name} </h4>
//         </div>


//         <div id='studentcontainer' className='w-full'>

//           <div className="studentmenu w-1/5 bg-amber-100">

//             <NavLink className=" text-xl " to="/stu-dash"> Home </NavLink>
//             <NavLink className=" text-xl " to="about"> About </NavLink>
//             <NavLink className=" text-xl " to="form"> Form </NavLink>
//             <NavLink className=" text-xl " to="display"> Display </NavLink>
//             <NavLink className=" text-xl " to="search"> Search </NavLink>
//             <NavLink className=" text-xl " to="update"> Update </NavLink>
//             <NavLink className=" text-xl " to="edit"> Edit </NavLink>
//           </div>


//           <div className="studentdata w-4/5 bg-red-300">
//             < Outlet />
//           </div>


//         </div>

//         <footer id="studentfooter" className="flex gap-4">
//           <p>Copyright. All rights reserved. </p>
//           <p>Registered Office : 23 old bunglow farm house</p>
//           <p>footer page company reserves all rights </p>
//         </footer>



//       </div>
//     </>
//   )
// }

// export default StuDash; 
