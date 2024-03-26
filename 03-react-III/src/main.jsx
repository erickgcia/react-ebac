import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.jsx'
import { ProfilesPage } from './pages/ProfilesPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
  },
  {
    path: '/profiles/:profileUsername',
    element: <ProfilePage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)