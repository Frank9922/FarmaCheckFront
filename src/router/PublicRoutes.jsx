import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'

export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/*' element={<Navigate to='/' />} />          
    </Routes>
  )
}
