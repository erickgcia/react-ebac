import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Error404 from './pages/Error404.tsx'
import Users from './pages/Users.tsx'
import UserProfile from './pages/UserProfile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/:username',
    element: <UserProfile />,
  },
])

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
