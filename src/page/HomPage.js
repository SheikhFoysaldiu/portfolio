import React from 'react'

import AboutMe from "../component/aboutMe/AboutMe"

import Hero from "../component/hero/Hero"
import Projects from '../component/projects/Projects'
import Chat from '../component/chat/Chat'
import Layout from './Layout'

const HomePage = ()=>{
    return(
 
        <Layout>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Chat/>
        </Layout>
  
    )
}

export default HomePage