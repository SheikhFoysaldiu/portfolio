import React from 'react'

import AboutMe from "../component/aboutMe/AboutMe"
import Nav from "../component/nav/Nav"
import Hero from "../component/hero/Hero"
import Projects from '../component/projects/Projects'
import Chat from '../component/chat/Chat'
import Footer from '../component/footer/Footer'
const HomePage = ()=>{
    return(
        <>
        <Nav/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Chat/>
        <Footer/>
        </>
    )
}

export default HomePage