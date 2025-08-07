import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import RetroCodeBackground from './RetroCodeBackground'

const RetroTerminalScreen = () => {
  const [isSystemStarted, setIsSystemStarted] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isTextCompleted, setIsTextCompleted] = useState(false)
  const terminalRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Textos que aparecerán
  const lines = [
    { text: '> BOOTING UP......', delay: 500 },
    { text: '> Connecting neural network...', delay: 700 },
    { text: '> ──────────────────────────────────', delay: 400 },
    { text: '> OPERATING SYSTEM LOADED', delay: 800 },
    { text: '> ──────────────────────────────────', delay: 400 },
    { text: '> Hi, I am camilo vargas', delay: 1200 },
    { text: '> I am Mechatronics Engineer and Full Stack Developer with over 4 years of experience', delay: 1000 },
    { text: '> Im dedicated to leveraging cutting-edge technologies to build impactful and scalable applications', delay: 1000 },
    { text: '> Im fascinated by the intersection of physical and digital systems, constantly seeking to optimize and innovate', delay: 1000 },
    { text: '> Now, lets dive deeper into my journey and showcase my projects.', delay: 1000 },
    { text: '> ──────────────────────────────────', delay: 400 },
    { text: '> SYSTEM READY FOR COMMANDS', delay: 600 },
    { text: '> _', delay: 0 },
  ]

  // Función para escribir texto letra por letra
  const typeText = (text, onComplete) => {
    setIsTyping(true)
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        const char = text[index]
        if (char !== undefined) {
          setDisplayText(prev => {
            const newText = prev + char
            // Scroll automático
            setTimeout(() => {
              if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight
              }
            }, 10)
            return newText
          })
        }
        index++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        setTimeout(onComplete, 200)
      }
    }, 50)
  }

  // Secuencia de escritura automática
  const startSystem = () => {
    setIsSystemStarted(true)
    setDisplayText('')
    setIsTextCompleted(false)
    
    let lineIndex = 0
    
    const typeNextLine = () => {
      if (lineIndex < lines.length) {
        const currentLineData = lines[lineIndex]
        
        setTimeout(() => {
          typeText(currentLineData.text + '\n', () => {
            lineIndex++
            typeNextLine()
          })
        }, currentLineData.delay)
      } else {
        // Al terminar todas las líneas
        setTimeout(() => {
          setIsTextCompleted(true)
        }, 1500)
      }
    }
    
    typeNextLine()
  }

  const handleSaberMas = () => {
    setIsTextCompleted(false)
    setIsLoading(true) // Mostrar ventana de carga
    //navigate('/portfolio/projects') 
    
    // Simular tiempo de carga y navegar
    setTimeout(() => {
      setIsLoading(false)
      //navigate('/portfolio/projects') 
      window.location.href = '/projects'
    }, 4000) 
  }

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Efectos de pantalla CRT */}
      <div className="absolute inset-0 scanlines-effect pointer-events-none">
        {/* Scanlines */}
        <div 
          className="absolute inset-0 opacity-70 animate-pulse"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(0, 255, 0, 0.15) 1px,
              rgba(0, 255, 0, 0.15) 2px,
              transparent 2px,
              transparent 4px
            )`
          }}
        ></div>
        
        {/* Glow effect radial */}
        <div className="absolute inset-0 bg-gradient-radial from-green-900/15 via-transparent to-black/80"></div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        
        {/* Subtle flicker */}
        <div className="absolute inset-0 bg-green-500/5 opacity-0 animate-flicker"></div>
      </div>

      {/* Botón de inicio del sistema */}
      {!isSystemStarted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90" style={{ marginTop: '0vh' }}>
          <button
            onClick={startSystem}
            className="relative group px-8 py-4 sm:px-12 sm:py-6 bg-black border-2 border-green-400 text-green-400 font-mono text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:bg-green-400/10 hover:border-green-300 hover:text-green-300 focus:outline-none cursor-pointer"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 255, 0, 0.1)'
            }}
          >
            {/* Efecto de glow en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Texto del botón */}
            <span className="relative z-10 tracking-wider">
              ▶ START THE SYSTEM
            </span>
            
            {/* Corners animados */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}

      {/* Botón "Saber más" al finalizar - centrado y más arriba */}
      {isTextCompleted && (
        <div className="fixed inset-0 flex items-end justify-center z-30 pointer-events-none mb-10" >
          <div className="pointer-events-auto animate-fadeIn">
            <button
              onClick={handleSaberMas}
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-black border-2 border-green-400 text-green-400 font-mono text-sm sm:text-base transition-all duration-300 hover:bg-green-400/10 hover:border-green-300 hover:text-green-300 focus:outline-none cursor-pointer"
              style={{
                textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
              }}
            >
              <span className="tracking-wider">► DISCOVER MORE</span>
            </button>
          </div>
        </div>
      )}

      {/* Terminal de comandos */}
      {isSystemStarted && (
        <div 
          ref={terminalRef}
          className="relative z-10 w-full h-screen p-4 sm:p-8 lg:p-12 font-mono text-green-400 overflow-auto scroll-smooth"
          style={{
            scrollBehavior: 'smooth'
          }}
        >
          {/* Header del sistema */}
          <div className="mb-6 pb-4 border-b border-green-400/30">
            <div className="text-xs sm:text-sm opacity-70">
              RETRO SYSTEM v3.14 - Terminal Mode
            </div>
            <div className="text-xs sm:text-sm opacity-50">
              {new Date().toLocaleString()}
            </div>
          </div>

          {/* Contenido del terminal */}
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <div className="whitespace-pre-wrap">
              {displayText}
              {/* Cursor parpadeante */}
              {isTyping && (
                <span className="animate-pulse bg-green-400 text-black px-1">█</span>
              )}
              {!isTyping && displayText && (
                <span className="animate-pulse">█</span>
              )}
            </div>
          </div>

          {isLoading && (
            <div className="fixed inset-0 z-50">
              <RetroCodeBackground>
                <p>Loading</p>
              </RetroCodeBackground>
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default RetroTerminalScreen