import React from 'react'
import Login from './Login'
import Browse from './Browse'
//import path from 'path'
import{RouterProvider} from 'react-router-dom'
import{createBrowserRouter} from 'react-router-dom'

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
