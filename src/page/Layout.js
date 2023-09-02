import React from 'react'
import Nav from '../component/nav/Nav'
import Footer from '../component/footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
            {children}
            <Footer/>
            </>
          
    )
  }
  
  export default Layout