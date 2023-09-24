import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ImageSlider } from '../../components/ImageSlider/ImageSlider'
import { ImageCategory } from '../../components/ItemCategories/ImageCategory'

export const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <ImageCategory />
    </>
  )
}
