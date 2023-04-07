import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ProjectsProviderWrapper } from './context/projects.context';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('app')).render(
	<React.StrictMode>
			<ProjectsProviderWrapper>
		<Router>
				<App />
		</Router>
			</ProjectsProviderWrapper>
	</React.StrictMode>
);
