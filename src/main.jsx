import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import UpdateNote from './pages/UpdateNote.jsx'
import NotFound from './NotFound.jsx'
import AddNote from './pages/AddNote.jsx'

const router = createBrowserRouter([
  {
    path:'/', element: <App/>,
    children:[
      {
        path: '/', 
        element: <Home/>
      },
      {
        path:'/update/:_id', 
        element:<UpdateNote/>
      },
      {
        path:'/addNote', element: <AddNote/>
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
