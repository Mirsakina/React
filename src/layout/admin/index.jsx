import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default AdminLayout