import React from 'react'
import Routes from "../../Routes/routes";
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../HeaderSection/HeaderSection'

const Layout = () => {
  return (
    <div>
        <HeaderSection/>
            <Routes/>
        <FooterSection/>
    </div>
  )
}

export default Layout