import React from 'react'
import { BsTelephoneInbound } from "react-icons/bs"

const HeaderPhone = () => {
  return (
    <div className='flex items-center'>
        <div className='border-r border-[#ccc] pr-[10px]'>
            <BsTelephoneInbound size={33} className="text-primary"/>
        </div>
        <div className='flex flex-col pl-5'>
            <span className='text-xs'>Call Us Today!</span>
            <a href="tel:+1 755 302 8549" className='font-bold'>+1 755 302 8549</a>
        </div>
    </div>
  )
}

export default HeaderPhone