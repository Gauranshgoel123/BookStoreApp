import React from 'react'
import Home from './home/Home'
import {Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contacts from './contact/Contacts'

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contacts/>} />
    </Routes>
    </>
    
  )
}

export default App
