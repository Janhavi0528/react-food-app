import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Cart from './components/Cart.jsx'
import Help from './components/Help.jsx'
import Offers from './components/Offers.jsx'
import HeaderTwo from './components/Header2.jsx'

const AppLayout =()=>{
  return (
      <div className='app h-screen'>
            {/* <HeaderTwo/> */}
            <Header/>
            <Outlet/>
   </div>  
  )
}

// spa = single page application

const appRouter = createBrowserRouter([
      {
        path : "/",
        element : <AppLayout/>,
        children : [
          {
            path : "/",
            element : <Body />
        },
          {
            path : "/cart",
            element : <Cart/>
          },
          {
            path : '/Login',
            element : <Login/>
          },
          {
            path : '/SignUp',
            element : <SignUp/>
          },
          {
            path : '/Help',
            element : <Help/>
          },
          {
            path : '/Offer',
            element : <Offers/>
          }
        ]
      }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <RouterProvider router={appRouter}/>
//   </React.StrictMode>,
// )
