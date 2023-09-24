import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ImageSlider } from '../../components/ImageSlider/ImageSlider'
import { ItemCategory } from '../../components/ItemCategories/ItemCaterory'


export const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <ItemCategory />
    </>
  )
}
