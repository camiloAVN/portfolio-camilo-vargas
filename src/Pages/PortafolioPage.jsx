import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { CanvasLoader } from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import RetroTerminalScreen from '../components/RetroTerminalScreen'
import OldPC from '../components/OldPC'


// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Componente para controlar la cámara
const CameraController = React.forwardRef(({ currentPhase }, ref) => {
  const camera = useRef()
  
  useEffect(() => {
    if (camera.current && ref) {
      ref.current = camera.current
    }
  }, [ref])

  return (
    <PerspectiveCamera 
      ref={camera}
      makeDefault 
      position={[0, 20, 30]}
      fov={75}
    />
  )
})

// Componente principal
export const PortafolioPage = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768});
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024});

  const [isShuttingDown, setIsShuttingDown] = useState(false)
  // Estados para controlar las fases
  const [currentPhase, setCurrentPhase] = useState('initial') // 'initial', 'zooming', 'inside'
  const cameraRef = useRef()
  const containerRef = useRef()
  
  const [scrollProgress, setScrollProgress] = useState(0)

  // barra de progreso
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setScrollProgress(scrolled)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Usar el hook de animación
  useScrollAnimation(cameraRef, setCurrentPhase, containerRef, setIsShuttingDown)

  return (
    <div ref={containerRef} className='relative bg-black'>

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Sección inicial - Hero con scroll */}
      <div className='min-h-screen w-full flex flex-col relative'>
        {/* Título superpuesto */}
        {currentPhase === 'initial' && (
          <div className='absolute -top-10 left-0 w-full h-full flex justify-center items-center pointer-events-none z-10'>
            <div className='text-center'>
              <p className='text-white text-xl sm:text-xl mb-2'>
                Hi, I am Camilo Vargas
              </p>
              <p className='text-2xl sm:text-4xl font-extrabold text-gray-300 text-slide-glow mb-10'>Bringing innovative ideas to life through robust code</p>
              <p className='text-gray-400 text-lg animate-pulse'>
                scroll down to explore
              </p>
            </div>
          </div>
        )}

        {/* Indicador de progreso durante el zoom */}
        {currentPhase === 'inside' && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10'>
            <div className='text-center'>
              <p className='text-white font-mono text-xl mb-4 font-bold drop-shadow-lg'>
                Accessing the system...
              </p>
              <div className='w-64 h-2 bg-gray-800 rounded-full overflow-hidden'>
                <div className='h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full ring-4 ring-blue-400 ring-opacity-75
                animate-pulse'></div>
              </div>
            </div>
          </div>
        )}

        {/* Canvas 3D */}
        <div className='w-full h-full absolute inset-0'>
          <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>
              <CameraController 
                ref={cameraRef}
                currentPhase={currentPhase}
              />
              <OldPC 
                scale={0.15} 
                position={[0.8,15,0]} 
                rotation={[Math.PI/7,Math.PI,0]}
              />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
            </Suspense>
          </Canvas>
          <div className='absolute inset-0 bg-green-500/30 pointer-events-none mix-blend-multiply'></div>

          {/*ventana retro matrix presentacion inicial */}
          {isShuttingDown && (
            <div className="absolute inset-0 z-20">
              {/* Efecto de línea horizontal cerrándose */}
              <div className="absolute inset-0 bg-black">
                <RetroTerminalScreen/>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}