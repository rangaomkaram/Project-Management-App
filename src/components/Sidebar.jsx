import React from "react"
import Button from "./Button.jsx"


const Sidebar = ({ onStartAddProject, projects }) => {
	return (
		<aside className="w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-slate-50">
				Your Projects
			</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
				<ul className="mt-8">
					{projects.map((project) => (
						<li key={project.id}>
							<Button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
								{project.projectName}
							</Button>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
