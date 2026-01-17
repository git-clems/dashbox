import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import AppBar from './components/appBar'
import SideBar from './components/sideBar'
import Order from './pages/order'

function App() {

  return (
    <div className='flex'>
      <SideBar></SideBar>
      <div style={{ width: "100%" }}>
        <AppBar></AppBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/orders' element={<Order />}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
