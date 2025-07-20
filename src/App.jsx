import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Pages/Services/Services'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/services",
          element: <Services/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App
