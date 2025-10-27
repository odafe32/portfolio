import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import MyStack from './MyStack';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
				
			</div>
		
		</ProjectsProvider>
	);
};

export default Projects;
