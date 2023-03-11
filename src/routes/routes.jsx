import React from "react"
import { Routes, Route } from "react-router-dom"
import User from "../pages/users"
import About from '../pages/about'
import Contact from '../pages/contact'
import Layout from "../layout/layout"
import Home from "../pages/home"
import SelectedUser from '../components/selectedUser'



const Router = () => {
    return(
        <>
         <div>
            <Routes>
                <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}  />
        <Route path="/users" element={<User/>}  />
        <Route path="/users/:id" element={<SelectedUser/>}/>
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
                </Route>
                </Routes>
        </div>
        </>
    )
}
export default Router