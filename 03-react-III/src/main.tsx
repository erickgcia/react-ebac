import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.ts'
import { ProductsPage } from './pages/ProductsPage.ts'
import { CustomersPage } from './pages/CustomersPage.ts'
import { ErrorPage } from './pages/ErrorPage.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

type PageRouterProps = {
  path: string
  element: JSX.Element
  errorElement?: JSX.Element
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/customers',
    element: <CustomersPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
