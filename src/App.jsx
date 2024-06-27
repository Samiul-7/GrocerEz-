import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import { Footer } from './Components/Footer/footer'
import HeaderPage from './pages/HeaderPage/HeaderPage'
import SearchPage from './Components/SearchPage/SearchPage';
const App = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/';

  return (
    <>
      <div className='app'>
        {showNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path='/' element={<HeaderPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App

