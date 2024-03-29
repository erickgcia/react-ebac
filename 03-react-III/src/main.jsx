import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.jsx'
import { ProductsPage } from './pages/ProductsPage.jsx'
import { CustomersPage } from './pages/CustomersPage.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/customers',
    element: <CustomersPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)