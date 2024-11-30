
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Registar from './assets/Components/Registar/Registar'



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
      </>
    )
  
  
}

export default App
