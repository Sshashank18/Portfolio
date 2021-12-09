import React from 'react'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/Projects/projects'
import Experience from './components/Experience/experience'
import Aux from './auxi'
import Navbar from './components/Navbar/navbar'
import SideDrawer from './components/sidedrawer/sidedrawer'
import Contact from './components/contact/contact'

const main = () => {
    return(
        <Aux>
            <SideDrawer/>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </Aux>
    )
}

export default main