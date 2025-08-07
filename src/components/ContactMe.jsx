import React, { useState } from 'react'

const ContactSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const contactData = [
    {
      id: 'email',
      title: 'EMAIL',
      value: 'camiloandresvargas12@gmail.com',
      displayValue: 'camiloandresvargas12@gmail.com',
      href: 'mailto:camiloandresvargas12@gmail.com',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Ready for new opportunities'
    },
    {
      id: 'linkedin',
      title: 'LINKEDIN',
      value: 'linkedin.com/in/camilo-andres-vargas-niño',
      displayValue: '/in/camilo-andres-vargas-niño',
      href: 'https://www.linkedin.com/in/camilo-andres-vargas-niño-b3a57a1b9',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Lets connect professionally'
    },
    {
      id: 'github',
      title: 'GITHUB',
      value: 'github.com/camiloAVN',
      displayValue: '/camiloAVN',
      href: 'https://github.com/camiloAVN',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: 'Explore my repositories'
    }
  ]

  const handleContactClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 lg:p-12 flex items-center">


      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
            <span className="text-green-500">&gt; </span>
            CONTACT
            <span className="animate-pulse">_</span>
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-8"></div>
          
          {/* Mensaje llamativo */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-light mb-4">
              Let's connect and explore how my skills can help you achieve your goals. Get in touch!
            </p>
          </div>
        </div>

        {/* Grid de contactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactData.map((contact) => (
            <div
              key={contact.id}
              className="group relative"
              onMouseEnter={() => setHoveredItem(contact.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Efecto de glow de fondo */}
              <div className={`absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Card principal */}
              <div className="relative bg-black border border-green-500/30 group-hover:border-green-400/60 transition-all duration-500 p-8 h-full">
                
                {/* Esquinas decorativas */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Contenido */}
                <div className="text-center space-y-6">
                  
                  {/* Icono */}
                  <div className="flex justify-center">
                    <div className={`p-4 border border-green-500/50 group-hover:border-green-400 transition-all duration-300 ${
                      hoveredItem === contact.id ? 'text-green-300 scale-110' : 'text-green-400'
                    }`}>
                      {contact.icon}
                    </div>
                  </div>

                  {/* Título */}
                  <div>
                    <h3 className="text-green-400 font-mono text-sm mb-2 flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      {contact.title}
                    </h3>
                    <p className="text-white font-semibold text-lg group-hover:text-green-100 transition-colors duration-300">
                      {contact.displayValue}
                    </p>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {contact.description}
                  </p>

                  {/* Botón de acción */}
                  <button
                    onClick={() => handleContactClick(contact.href)}
                    className="w-full bg-green-600/0 hover:bg-green-600/20 border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 py-3 px-6 font-mono text-sm transition-all duration-300 group/btn"
                  >
                    <span className="group-hover/btn:animate-pulse">
                      &gt; CONECT_
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactSection