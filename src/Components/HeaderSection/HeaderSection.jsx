import React from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderPhone from './HeaderPhone/HeaderPhone'
const HeaderSection = () => {
  return (
    <header className='w-full h-[92px] bg-white'>
        <div className='w-full h-full container mx-auto lg:px-36 px-6 py-2 flex items-center justify-between'>
            <HeaderLogo/>
            <HeaderLinks/>
            <HeaderPhone/>
        </div>
    </header>
  )
}

export default HeaderSection