import React from 'react'
import Header from '../Components/Header'
import HeaderItem from '../Components/ItemHeader'
import Navbar from '../Components/Navbar'
import NavCarousel from '../Components/Navbar/Carousel'
import OrderIcon from '../Components/OrderSec'
import Trending from '../Components/Product'
import TopProduct from '../Components/TopProduct'
const Root = () => {
  return (
    <div>
        <Header/>
        <HeaderItem/>
        <Navbar/>
        <NavCarousel/>
        <OrderIcon/>
        <Trending/>
        <TopProduct/>
    </div>
  )
}

export default Root