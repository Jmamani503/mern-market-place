import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<SingIn/>}></Route>
        <Route path='/sign-up' element={<SingUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

