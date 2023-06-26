import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/customers' element={<About />}/>
    </Routes> 
    </>
  )
}

export default App
