import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ImageSlider } from '../../components/ImageSlider/ImageSlider'
import { ItemCategory } from '../../components/ItemCategories/ItemCaterory'
import { AvailableItems } from '../../components/AvailableItems/AvailableItems'


export const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <ItemCategory />
        <AvailableItems />
    </>
  )
}
