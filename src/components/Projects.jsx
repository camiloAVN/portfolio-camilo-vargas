import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { CanvasLoader } from './CanvasLoader'
import  DemoPC  from './DemoPC'
// Array de proyectos (luego mover a archivo separado)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Una plataforma de comercio electrónico completa con sistema de pagos integrado, gestión de inventario en tiempo real y dashboard administrativo. Implementa autenticación JWT, carrito de compras persistente y notificaciones en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    image: "/project1.jpg", // Placeholder
    demoUrl: "https://demo1.com",
    githubUrl: "https://github.com/user/project1",
    textures: "/textures/1.mp4"
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Aplicación de gestión de tareas potenciada con inteligencia artificial que predice tiempos de completion, sugiere prioridades y optimiza flujos de trabajo. Incluye análisis de productividad y reportes detallados.",
    technologies: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Redis"],
    image: "/project2.jpg", // Placeholder
    demoUrl: "https://demo2.com",
    githubUrl: "https://github.com/user/project2",
    textures: "/textures/2.mp4"
  },
  
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }

  const project = projectsData[currentProject]

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 lg:p-12">
      {/* Header */}
      <div className="relative z-10 mb-12">
        <h1 className="text-4xl md:text-6xl font-mono font-bold text-center mb-4">
          <span className="text-green-500">&gt; </span>
          PROJECTS
          <span className="animate-pulse">_</span>
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Contenedor izquierdo - Información del proyecto */}
          <div className="order-1 lg:order-1 space-y-8">
            
            {/* Título del proyecto */}
            <div className="border-l-2 border-green-400 pl-6">
              <div className="text-sm font-mono text-green-500 mb-2">
                [{String(currentProject + 1).padStart(2, '0')}/{String(projectsData.length).padStart(2, '0')}]
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              
              {/* Descripción */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {/* Tecnologías */}
            <div>
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                TECH_STACK
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative px-3 py-1 bg-black border border-green-500/30 rounded font-mono text-xs text-green-400 hover:border-green-400 hover:text-green-300 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                    <span className="relative z-10">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 bg-green-600/20 hover:bg-green-600/30 border border-green-500 hover:border-green-400 text-green-400 hover:text-green-300 px-6 py-3 font-mono text-sm transition-all duration-300 text-center"
              >
                <span className="group-hover:animate-pulse">&gt; DEMO_LIVE</span>
              </a>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-6 py-3 font-mono text-sm transition-all duration-300 text-center"
              >
                <span className="group-hover:animate-pulse">&gt; SOURCE_CODE</span>
              </a>
            </div>

            {/* Navegación entre proyectos */}
            <div className="flex items-center justify-between pt-8 border-t border-green-500/20">
              <button
                onClick={prevProject}
                className="group flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-green-500 hover:border-green-400 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <span className="font-mono text-sm hidden sm:block">BACK</span>
              </button>

              {/* Indicadores de proyecto */}
              <div className="flex space-x-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === currentProject 
                        ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                        : 'bg-gray-600 hover:bg-green-500/50'
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextProject}
                className="group flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <span className="font-mono text-sm hidden sm:block">NEXT</span>
                <div className="w-10 h-10 border border-green-500 hover:border-green-400 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Contenedor derecho - Imagen/Preview del proyecto */}
          <div className="order-2 lg:order-2">
            <div className="relative group">
              {/* Frame de la imagen */}
              <div className="absolute inset-0 border border-green-500/30 group-hover:border-green-400/60 transition-colors duration-500"></div>
              <div className="absolute -inset-2 border border-green-500/10 group-hover:border-green-400/20 transition-colors duration-500"></div>
              
              {/* Imagen del proyecto */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black aspect-video overflow-hidden">
                {project.image ? (
                  <>
                  <Canvas>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,5]}/>
                    <Center>
                      <Suspense fallback={<CanvasLoader/>}>
                      <group scale={10} position={[0,0.3,0]} rotation={[0,-0.1,0]}>
                        <DemoPC texture={projectsData[currentProject].textures}/>
                      </group>
                      </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={true}/>
                  </Canvas>
                  </>

                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-green-400/30 mb-4">{'{ }'}</div>
                      <div className="text-green-400 font-mono text-sm">PROJECT_PREVIEW</div>
                    </div>
                  </div>
                )}
                
                {/* Overlay con efecto hover */}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects