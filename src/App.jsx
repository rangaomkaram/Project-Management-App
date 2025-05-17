import Sidebar from "./components/Sidebar.jsx"
import CreateProject from "./components/CreateProject.jsx"
import ProjectSelect from "./components/ProjectSelect.jsx"
import { useState } from "react"

function App() {
	const [projectState, setProjectsState] = useState({
		//currentAction : 'Adding or selecting-project',
		selectedProjectId: undefined,
		projects: []
	})
	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}

	// adding  project
	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random()
			// update state based on old state
			const newProjects = {
				// here contains name, description, targetDate
				...projectData,
				// id: Date.now().toString(36),
				id: projectId
			}
			return {
				...prevState, // existing data added
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProjects],
			}
		})
	}

	// console.log(projectState)

	let projectContent
	if (projectState.selectedProjectId === null) {
		projectContent = <CreateProject onAddProject={handleAddProject} />
	} else if (projectState.selectedProjectId === undefined) {
		projectContent = (
			<ProjectSelect onStartAddProject={handleStartAddProject} />
		)
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar onStartAddProject={handleStartAddProject} 
			projects = {projectState.projects}
			/>
			{/* <ProjectSelect onStartAddProject={handleStartAddProject} /> */}
			{projectContent}
		</main>
	)
}

export default App
