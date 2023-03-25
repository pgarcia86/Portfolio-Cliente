import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ProjectsProviderWrapper } from './context/projects.context'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ProjectsProviderWrapper>
      <App />
    </ProjectsProviderWrapper>
  </React.StrictMode>
)
