// import { useState } from 'react'
import {Routes, Route} from "react-router";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";


function App() {

  return (
    <>
        <h1>Hello</h1>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
