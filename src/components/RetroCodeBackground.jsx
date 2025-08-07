import React, { useEffect, useState, useRef } from 'react'

const RetroCodeBackground = ({children}) => {
  const containerRef = useRef()
  const [codeColumns, setCodeColumns] = useState([])

  // Código de muestra para simular
  const codeSnippets = [
    'function()',
    'if (true)',
    'console.log',
    'return false',
    'var x = 0',
    'for(i=0;i<10;i++)',
    'while(true)',
    'break;',
    'continue;',
    'import React',
    'export default',
    'const [state]',
    'useEffect()',
    'addEventListener',
    'setTimeout()',
    'fetch(url)',
    '=> {',
    '});',
    'try {',
    'catch(e)',
    'throw new',
    'Promise.all',
    'async/await',
    'JSON.parse',
    'localStorage',
    'document.get',
    'window.open',
    'Math.random',
    'Array.map',
    'Object.keys',
    '&&', '||', '===',
    'null', 'undefined',
    'true', 'false',
    '0101010101',
    '1010101010',
    '1100110011',
    '0011001100',
  ]

  // Generar columnas de código
  useEffect(() => {
    const generateColumns = () => {
      const columns = []
      const numColumns = Math.floor(window.innerWidth / 20) // Columna cada 20px
      
      for (let i = 0; i < numColumns; i++) {
        columns.push({
          id: i,
          x: i * 20,
          delay: Math.random() * 5, // Delay aleatorio para que no caigan todas juntas
          speed: 0.5 + Math.random() * 1.5, // Velocidad aleatoria
          characters: Array.from({ length: 30 }, () => 
            codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          )
        })
      }
      
      setCodeColumns(columns)
    }

    generateColumns()
    
    // Regenerar en resize
    const handleResize = () => generateColumns()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, )

  // Actualizar caracteres periódicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeColumns(prev => 
        prev.map(column => ({
          ...column,
          characters: column.characters.map((char) => 
            Math.random() < 0.05 ? // 5% de probabilidad de cambiar
              codeSnippets[Math.floor(Math.random() * codeSnippets.length)] 
              : char
          )
        }))
      )
    }, 500) // Cambiar cada 200ms

    return () => clearInterval(interval)
  }, )

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Efecto de pantalla CRT */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent bg-repeat-y animate-pulse" 
             style={{
               backgroundImage: `repeating-linear-gradient(
                 0deg,
                 transparent,
                 transparent 2px,
                 rgba(0, 255, 0, 0.03) 2px,
                 rgba(0, 255, 0, 0.03) 4px
               )`
             }}>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-transparent to-black/60"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Columnas de código cayendo */}
      <div ref={containerRef} className="absolute inset-0">
        {codeColumns.map(column => (
          <div
            key={column.id}
            className="absolute top-0 text-green-400 font-mono text-xs leading-tight select-none"
            style={{
              left: `${column.x}px`,
              animationDelay: `${column.delay}s`,
              animation: `fall ${10 / column.speed}s linear infinite`
            }}
          >
            {column.characters.map((char, index) => (
              <div
                key={index}
                className={`block transition-opacity duration-200 ${
                  Math.random() > 0.8 ? 'text-white' : 'text-green-400/80'
                }`}
                style={{
                  opacity: Math.max(0.3, 1 - (index * 0.03)),
                  textShadow: Math.random() > 0.9 ? '0 0 10px #00ff00' : 'none'
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Título principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold font-mono text-green-400 mb-4 tracking-wider"
              style={{
                textShadow: `
                  0 0 20px #00ff00,
                  0 0 40px #00ff00,
                  0 0 60px #00ff00
                `,
                animation: 'glow 2s ease-in-out infinite alternate'
              }}>
            {children}
          </h1>
          
          {/* Cursor parpadeante */}
          <span className="text-green-400 text-6xl md:text-8xl font-mono animate-pulse">_</span>
          
          {/* Líneas decorativas */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent to-green-400 w-20 animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="h-px bg-gradient-to-l from-transparent to-green-400 w-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Efecto de interferencia ocasional */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 animate-glitch"></div>
      </div>

    </div>
  )
}

export default RetroCodeBackground