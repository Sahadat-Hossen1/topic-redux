import React from 'react'
import { UserRouter } from './components/router/UserRouter'
import { RouterProvider } from 'react-router-dom'

export default function App() {
  return (
    <RouterProvider router={UserRouter}/>
  )
}
