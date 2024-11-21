import React from 'react'
import Navbar from '../layout/user/navbar'
import { Route, Routes } from 'react-router'
import UserLayout from '../layout/user'
import Home from '../pages/user/home'
import About from '../pages/user/about'
import Contact from '../pages/user/contact'
import AdminLayout from '../layout/admin'
import Dashboard from '../pages/admin/dashboard'
import Categories from '../pages/admin/categories'
import Tables from '../pages/admin/tables'
import Footer from '../layout/user/footer'
import NotFound from '../pages/notfound'
import Blogs from '../pages/user/blogs'
import SingleBlog from '../pages/user/singleblog'

function Routers() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<SingleBlog/>} />
        <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
        <Route index element ={<Dashboard />} />
        <Route path='categories' element={<Categories />} />
        <Route path='tables' element={<Tables />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Routers