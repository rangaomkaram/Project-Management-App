import React from "react";
import Button from "./Button.jsx";

const Sidebar = ({onStartAddProject}) => {
	return (
		<aside className="w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-slate-50">
				Your Projects
			</h2>
			<div>
				<Button onClick = {onStartAddProject}>
					+ Add Project
				</Button>
					
				
			</div>
		</aside>
	)
}

export default Sidebar;
