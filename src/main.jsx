import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import Converter from './pages/Converter/Converter.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'

import './index.css'

const router = createHashRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/converter",
      element: <Converter />
    },
    {
      path: "/about",
      element: <AboutPage />
    }
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
