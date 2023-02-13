import React from 'react'
import Header from '../Components/Header'
import HeaderItem from '../Components/ItemHeader'
import Navbar from '../Components/Navbar'
import HeadCarousel from '../Components/Navbar/Carousel'
const Root = () => {
  return (
    <div>
        <Header/>
        <HeaderItem/>
        <Navbar/>
        <HeadCarousel/>
    </div>
  )
}

export default Root