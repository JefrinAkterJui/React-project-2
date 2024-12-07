
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Registar from './assets/Components/Registar/Registar'
import app from './firbase.config'
import { ToastContainer } from 'react-toastify'
import Login from './assets/Components/Login/Login'
import LayoutsOne from './Layouts/LayoutsOne'
import Home from './Pages/Home'



function App() {
   const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/Regitar' element={<Registar/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<LayoutsOne/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Route>
    )
   )


    return (
      <>
      <RouterProvider router={myRoute}/>
      <ToastContainer/>
      </>
    )
  
  
}

export default App
