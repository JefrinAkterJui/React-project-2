
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Registar from './assets/Components/Registar/Registar'
import app from './firbase.config'
import { ToastContainer } from 'react-toastify'



function App() {
   const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Registar/>}/>
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
