import React from 'react'
import Header from '../Components/Header'
import HeaderItem from '../Components/ItemHeader'
import Navbar from '../Components/Navbar'
import { Container } from './style'

const Root = () => {
  return (
    <Container>
        <Header/>
        <HeaderItem/>
        <Navbar/>
    </Container>
  )
}

export default Root