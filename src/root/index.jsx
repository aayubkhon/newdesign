import React from 'react'
import Header from '../Components/Header'
import HeaderItem from '../Components/ItemHeader'
import Navbar from '../Components/Navbar'
import NavCarousel from '../Components/Navbar/Carousel'
import OrderIcon from '../Components/OrderSec'
const Root = () => {
  return (
    <div>
        <Header/>
        <HeaderItem/>
        <Navbar/>
        <NavCarousel/>
        <OrderIcon/>
    </div>
  )
}

export default Root