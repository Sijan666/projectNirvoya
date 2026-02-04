import React from 'react'
import Banner from '../layouts/Banner'
import Category from '../layouts/Category'
import FeaturedProducts from '../layouts/FeaturedProducts'
import FooterTop from '../layouts/FooterTop'


const Home = () => {
    return (
        <>
        <Banner/>
        <Category/>
        <FeaturedProducts/>
        <FooterTop/>
        </>
    )
}

export default Home