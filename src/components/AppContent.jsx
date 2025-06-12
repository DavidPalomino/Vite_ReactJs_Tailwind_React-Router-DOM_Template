import { router } from '@/config/routes'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

export const AppContent = () => {
  return ( <RouterProvider router={router} /> )
}
