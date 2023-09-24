import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ImageSlider } from '../../components/ImageSlider/ImageSlider'
import { ItemCategory } from '../../components/ItemCategories/ItemCaterory'
import { Footer } from '../../components/Footer/Footer'


export const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <ItemCategory />
        <Footer />
    </>
  )
}
