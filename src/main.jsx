import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.jsx';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
