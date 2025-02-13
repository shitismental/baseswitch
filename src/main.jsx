import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import Converter from './pages/Converter/Converter.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'

import './index.css'

const router = createBrowserRouter(
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
  {
    basename: "/nsconverter/",
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
