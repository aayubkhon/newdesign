import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeaderItem from '../Components/ItemHeader'
import Navbar from '../Components/Navbar'
import NavCarousel from '../Components/Navbar/Carousel'
import OrderIcon from '../Components/OrderSec'
import Lates from '../Components/OurLates'
import OurProduct from '../Components/OurProduct'
import AllProduct from '../Components/OurProduct/AllProducts'
import Trending from '../Components/Product'
import TopProduct from '../Components/Product/TopProduct'
import Testimonials from '../Components/Testimonials'
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
        <OurProduct/>
        <AllProduct/>
        <Testimonials/>
        <Lates/>
        <Footer/>
    </div>
  )
}

export default Root