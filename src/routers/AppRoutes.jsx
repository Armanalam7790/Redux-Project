import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../Pages/HomePage'
import Shop from '../Pages/Shop'
import About from '../Pages/About'
import MainLayout from '../layouts/MainLayout'
import CartPage from '../Pages/CartPage'

const AppRoutes = () => {

    let router  = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
           
                path:'/',
                element:<HomePage />
                },
                
                 {
           
                path:'shop',
                element:<Shop />
                },

                {
                    path:'about',
                    element:<About />
                },
                 {
                    path:'cart',
                    element:<CartPage />
                },
            ]
        },
        
    ])
  return <RouterProvider router={router} />


}

export default AppRoutes