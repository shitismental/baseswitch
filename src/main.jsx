import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import ConverterPage from './pages/ConverterPage/ConverterPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'

import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/converter",
      element: <ConverterPage />
    },
    {
      path: "/about",
      element: <AboutPage />
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
