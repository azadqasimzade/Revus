import React from 'react'
import FeatureSection from '../Components/FeatureSection/FeatureSection'
import HeroSection from '../Components/HeroSection/HeroSection'
import SearchSection from '../Components/SearchSection/SearchSection'
import ServicesSection from '../Components/ServicesSection/ServicesSection'
import WelcomeSection from '../Components/WelcomeSection/WelcomeSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <SearchSection/>
        <WelcomeSection/>
        <FeatureSection/>
        <ServicesSection/>
    </>
  )
}

export default Home