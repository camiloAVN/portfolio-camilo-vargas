import { Routes, Route, Navigate } from 'react-router-dom'
import { PortafolioPage } from '../Pages/PortafolioPage'
import { ProjectsPortfolioPage } from '../Pages/ProjectsPorfolioPage'


export const AppRouter = () => {
  
  return (
    <Routes>
        <Route path="/*" element={<PortafolioPage/>} />
        <Route path="/projects" element={<ProjectsPortfolioPage/>} />

    </Routes>

  )
}
