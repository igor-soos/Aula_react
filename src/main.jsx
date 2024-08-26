import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'

const router =createBrowserRouter([
  
  {
    //chamando elemento pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

   //chamando elemento filho
    children:[
      {path:'/',element:<Home/>},
      {path:'/',element:<Aluno/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
