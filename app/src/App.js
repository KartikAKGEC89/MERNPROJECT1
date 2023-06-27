import React from 'react';
// Yha pr react-router-dom me se Route and Routes do file ko use kiya hai *******************
import { Route, Routes } from 'react-router-dom';
// Yha pr react-router-dom me se Route and Routes do file ko use kiya hai *******************
import './App.css';
// Yha pr hum import kr rhe hai files from components folder *********************************
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Singup from './components/Singup';
// Yha pr hum import kr rhe hai files from components folder *********************************

const App = () => {
  return (
    <>
      {/*  yha pr basically Navbar name se jo humne Component bnaya hai uska use kr rhe hai navbar show krne ke liye aur ye routes se bhar hai to ye basically every page pr render hoga */}
      <Navbar />

      {/* Yha pr basically hum route create kr rhe hai jaki humara page baar baar reload na ho aur to aur component hume humare page pr dikai de  */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About.js' element={<About />} />
      <Route path='/Contact.js' element={<Contact />} />
      <Route path='/Login.js' element={<Login />} />
      <Route path='/Singup.js' element={<Singup />} />
      </Routes> 
      {/* Yha pr basically hum route create kr rhe hai jaki humara page baar baar reload na ho aur to aur component hume humare page pr dikai de  */}
    </>
  )
}

export default App
