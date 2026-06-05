import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../layouts/Banner'
import Category from '../layouts/Category'
import FlashDeals from '../layouts/FlashDeals'
import FeaturedProduct from '../layouts/FeaturedProduct'

const Home = () => {
        return (
        <>
        <Helmet>
                <title>Home - Project Nirvoya</title>
                <meta name="description" content="Welcome to Project Nirvoya. Discover the best products, flash deals, and top categories." />
        </Helmet>
        <Banner/>
        <Category/>
        <FlashDeals/>
        <FeaturedProduct/>
        </>
        )
}

export default Home