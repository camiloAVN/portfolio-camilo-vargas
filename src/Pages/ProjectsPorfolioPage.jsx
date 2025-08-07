import React from 'react'
import  Projects  from '../components/Projects'
import ContactSection from '../components/ContactMe'
import AboutSection from '../components/AboutMe'

export const ProjectsPortfolioPage = () => {
  return (
    <div>
      {/* Efectos de fondo matrix sutil */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.3) 2px,
              rgba(0, 255, 0, 0.3) 4px
            )`
          }}
        ></div>
      </div>
      <AboutSection/>
      <Projects/>
      <ContactSection/>

    </div>
  )
}
