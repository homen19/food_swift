import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ImageSlider } from '../../components/ImageSlider/ImageSlider'
import { ItemCategory } from '../../components/ItemCategories/ItemCaterory'

import { Footer } from '../../components/Footer/Footer'
import { AvailableItems } from '../../components/AvailableItems/AvailableItems'
import Profile from '../../components/Profile/Profile';





export const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <ItemCategory />
        <AvailableItems />
        <Footer />
<<<<<<< HEAD
        <Profile />
=======
        {/* <Profile /> */}
>>>>>>> bad148d3a743e0320042744cd92f40bc334b827c
    </>
  )
}
