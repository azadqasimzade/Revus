import React from 'react'
import FeatureSectionItem from './FeatureSectionItem'

const FeatureSection = () => {
  return (
    <section className='relative w-full h-full bg-secondary py-20'>
        <div className="w-full h-full md:container mx-auto xl:px-36 px-6">
            <h6 className='text-xs uppercase font-semibold text-white tracking-wide'>HELPS YOU TO FIND YOUR NEXT CAR EASILY</h6>
            <h2 className='text-[40px] font-bold capitalize text-white'>Featured <span className='text-primary'>Vehicles</span></h2>
        </div>
        <FeatureSectionItem/>
    </section>
  )
}

export default FeatureSection