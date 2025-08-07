import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export const useScrollAnimation = (cameraRef, setCurrentPhase, containerRef, setIsShuttingDown) => {

  useEffect(() => {
    // Dar tiempo para que los componentes se monten
    const timer = setTimeout(() => {
      
      if (!cameraRef.current || !containerRef.current) {
        return
      }

      const camera = cameraRef.current
      
      // Posiciones iniciales y finales
      //const initialPosition = { x: 0, y: 20, z: 30 }
      const screenPosition = { x: -0.3, y: 29, z: 7 }
      
      // Timeline principal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          markers: false, 
          onUpdate: (self) => {
            const progress = self.progress
            
            if (progress < 0.2) {
              setCurrentPhase('initial')
            } else if (progress < 0.8) {
              setCurrentPhase('zooming')
            } else if (progress <0.9){
              setCurrentPhase('inside')
            }else{
                setCurrentPhase('shutdown')
                setIsShuttingDown(true)
            }
          },
          
            onStart: () => console.log('ScrollTrigger iniciado'),

            onComplete: () => {
                //const audio = new Audio('/sounds/sonidoTV.mp3')
                //audio.play().catch(() => {}) // Silenciar errores
                setTimeout(() => {
                    // Buscar el elemento de la siguiente sección
                    const nextSection = document.getElementById('profile-section')
                    if (nextSection) {
                    nextSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    })
                    }
                    
                    setTimeout(() => {
                    setIsShuttingDown(false)
                    }, 1000)
                }, 1500)
            }
        }
      })

      // Animación de la cámara hacia la pantalla
      tl.to(camera.position, {
        x: screenPosition.x,
        y: screenPosition.y, 
        z: screenPosition.z,
        duration: 1,
        ease: "power2.inOut",

      })
      .to(camera.rotation, {
        x: Math.PI/8,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: "power2.inOut"
      }, "-=0.5")

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, 1000) // Esperar 1 segundo

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [cameraRef, setCurrentPhase, containerRef, setIsShuttingDown])
}