import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { CanvasLoader } from './CanvasLoader'
import { Avatar } from './Avatar'
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc'

const iconPacks = {
  ...FaIcons,
  ...RiIcons,
  ...IoIcons,
  ...SiIcons,
  ...VscIcons
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('experience')

  // Datos de experiencia laboral
  const experienceData = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Shock producciones",
      period: "2018 - 2020",
      description: "Designing and building seamless, responsive user interfaces that deliver exceptional performance across all devices.",
      technologies:["React", "TypeScript", "Bootstrap", "Sketch"]
    },
    {
      id: 2,
      position: "Full stack Developer",
      company: "Shock producciones",
      period: "2020 - 2023",
      description: "Building and deploying scalable applications. I develop dynamic user interfaces with React, create powerful back-end systems using Node.js and MongoDB, and leverage Docker and AWS for efficient cloud deployment.",
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB", "Express"]
    },
    {
      id: 3,
      position: "Project Management",
      company: "Shock producciones",
      period: "2023 - 2025",
      description: "I manage and deliver projects by overseeing agile workflows in Jira, collaborating directly with development teams via GitHub/GitLab, and facilitating design and prototyping processes using Figma.",
      technologies: ["Jira", "GitHub/GitLab", "Figma"]
    }
  ]

  // Conocimientos técnicos organizados por categorías
  const skillsData = {
    frontend: {
      title: "FRONTEND",
      skills: [
        { name: "React", iconName:'FaReact' },
        { name: "Next.js", iconName: 'RiNextjsLine' },
        { name: "Javascript", iconName: 'IoLogoJavascript' },
        { name: "Tailwind CSS", iconName: 'RiTailwindCssFill' },
        { name: "Three.js", iconName: 'SiThreedotjs' }
      ]
    },
    backend: {
      title: "BACKEND",
      skills: [
        { name: "Node.js", iconName:'FaNodeJs' },
        { name: "Python", iconName:'FaPython' },
        { name: "Express.js", iconName:'SiExpress' },
        { name: "MongoDB", iconName:'SiMongodb' },
        { name: "AWS", iconName:'FaAws' },
        { name: "Firebase", iconName:'RiFirebaseFill' },
      ]
    },
    AI: {
      title: "AI",
      skills: [
        { name: "TensorFlow", iconName: 'SiTensorflow' },
        { name: "Pytorch", iconName: 'SiPytorch' },
        { name: "n8n", iconName: 'SiN8N' },
        { name: "Open AI", iconName: 'RiOpenaiFill' },
        { name: "Hugging Face", iconName: 'SiHuggingface' },
      ]
    },
    tools: {
      title: "TOOLS",
      skills: [
        { name: "GitHub", iconName:'FaGithub' },
        { name: "Docker", iconName:'FaDocker' },
        { name: "Figma", iconName:'FaFigma' },
        { name: "VS Code", iconName:'VscVscodeInsiders' },
        { name: "Postman", iconName:'SiPostman'},
        { name: "Jira", iconName:'SiJira' },
      ]
    }
  }

  const tabs = [
    { id: 'experience', label: 'EXPERIENCE', icon: '💼' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'about', label: 'ABOUT_ME', icon: '👨‍💻' }
  ]
   //const IconComponent = iconPacks[skill.iconName];

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 lg:p-12">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
            <span className="text-green-500">&gt; </span>
            ABOUT_ME
            <span className="animate-pulse">_</span>
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Turning ideas into code. Passionate about creating exceptional digital experiences.
          </p>
        </div>

        {/* Contenedor principal con grid desigual */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contenedor izquierdo - Modelo 3D (más pequeño) */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <div className="relative group">
              {/* Frame del modelo 3D */}
              <div className="absolute inset-0 border border-green-500/30 group-hover:border-green-400/60 transition-colors duration-500"></div>
              <div className="absolute -inset-2 border border-green-500/10 group-hover:border-green-400/20 transition-colors duration-500"></div>
              
              {/* Contenedor del modelo 3D */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black aspect-square overflow-hidden">
                {/* Placeholder para el modelo 3D */}
                <div className="w-full h-full flex items-center justify-center">
                  <Canvas>
                    <ambientLight intensity={7}/>
                    <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                    <directionalLight position={[10,10,10]} intensity={1}/>
                    <OrbitControls enableZoom={false} />
                    <Center>
                      <Suspense fallback={<CanvasLoader/>}>
                      <Avatar scale={2.3} position={[0,-2.5,1]} rotation={[Math.PI/4,0,0]}/>
                      </Suspense>

                    </Center>
                  </Canvas>

                </div>
              
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Info personal debajo del modelo */}
            <div className="mt-8 text-center space-y-4">
              <div className="border border-green-500/30 p-4">
                <div className="text-white font-bold text-lg mb-2">Camilo Vargas</div>
                <div className="text-green-400 font-mono text-sm mb-1">Mechatronic Engineer / Full Stack Developer</div>
                <div className="text-gray-400 text-sm">Bogotá, Colombia 🇨🇴</div>
              </div>
            </div>
          </div>

          {/* Contenedor derecho - Información (más grande) */}
          <div className="lg:col-span-2 order-2 lg:order-2 space-y-8">
            
            {/* Navegación por tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-400/20 border-green-400 text-green-300'
                      : 'bg-black border-green-500/30 text-green-400 hover:border-green-400/60'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido basado en el tab activo */}
            <div className="min-h-[500px]">
              
              {/* Tab de Experiencia */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    WORK_EXPERIENCE
                  </h3>
                  
                  <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                      <div key={exp.id} className="relative border-l-2 border-green-500/30 pl-8">
                        {/* Timeline dot */}
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                        
                        <div className="bg-black/50 border border-green-500/20 p-6 hover:border-green-400/40 transition-colors duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                            <span className="text-green-400 font-mono text-sm">{exp.period}</span>
                          </div>
                          
                          <div className="text-green-300 font-semibold mb-3">{exp.company}</div>
                          <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab de Skills */}
              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    TECHNICAL_SKILLS
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {Object.entries(skillsData).map(([key, category]) => (
                      <div key={key} className="bg-black/50 border border-green-500/20 p-6 flex flex-col items-center  hover:border-green-400/40 transition-colors duration-300">

                        <h4 className="text-green-400 font-mono text-lg mb-6 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                          {category.title}
                        </h4>
                        
                        <div className="space-y-4 space-x-4 grid grid-cols-2">
                          {category.skills.map((skill, index) => {
                            const IconComponent = iconPacks[skill.iconName]; // Obtenemos el componente real

                            return (
                              <div
                                key={index}
                                className="bg-black/50 border border-green-500/20 p-3 hover:border-green-400/40 transition-colors duration-300 w-20 h-27 rounded-md"
                              >
                                <div className="flex items-center flex-col">
                                  {IconComponent ? (
                                    <IconComponent size={40} />
                                  ) : (
                                    <span className="text-white">❓</span> // fallback si no existe el ícono
                                  )}
                                  <span className="text-white text-sm mt-2">{skill.name}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab Sobre Mí */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    ABOUT_ME
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-black/50 border border-green-500/20 p-6 hover:border-green-400/40 transition-colors duration-300">
                        <h4 className="text-green-400 font-mono mb-4">MY_STORY</h4>
                        <p className="text-gray-300 leading-relaxed">
                          I am a passionate developer with a background in Mechatronics Engineering and over 4 years of experience in crafting innovative digital solutions. My expertise in full-stack development allows me to take on complex challenges and transform them into elegant and functional interfaces, bridging the gap between physical and digital systems.
                        </p>
                      </div>
                      
                      <div className="bg-black/50 border border-green-500/20 p-6 hover:border-green-400/40 transition-colors duration-300">
                        <h4 className="text-green-400 font-mono mb-4">WORK_PHILOSOPHY</h4>
                        <p className="text-gray-300 leading-relaxed">
                          I'm committed to delivering clean, well-structured code and promoting effective collaboration. I constantly seek out new technologies and stay current with the latest trends in web development.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-black/50 border border-green-500/20 p-6 hover:border-green-400/40 transition-colors duration-300">
                        <h4 className="text-green-400 font-mono mb-4">INTERESTS</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-center"><span className="text-green-400 mr-2">▶</span> Artificial Intelligence</li>
                          <li className="flex items-center"><span className="text-green-400 mr-2">▶</span> Music Production</li>
                          <li className="flex items-center"><span className="text-green-400 mr-2">▶</span> Chess</li>
                          <li className="flex items-center"><span className="text-green-400 mr-2">▶</span> Technology</li>
                        </ul>
                      </div>
                      
                      <div className="bg-black/50 border border-green-500/20 p-6 hover:border-green-400/40 transition-colors duration-300">
                        <h4 className="text-green-400 font-mono mb-4">CERTIFICATIONS</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> IBM data science</li>
                          <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> MITxpro development of AI products</li>
                          <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Next U Web development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection