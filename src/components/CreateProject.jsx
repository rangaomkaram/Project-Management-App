import React from "react"
import Input from "./Input.jsx"
import Button from "./Button.jsx"
import { useRef } from "react"
import Modal from "./Modal.jsx"

const CreateProject = ({ onAddProject }) => {

	const modal = useRef()
	//Interacting the reference value useRef hook is used
	const projectName = useRef()
	const description = useRef()
	const targetDate = useRef()

	// To Save the Project

	function handleSave() {
		const recordName = projectName.current.value
		const recordDescription = description.current.value
		const recordTargetDate = targetDate.current.value

		// Error Model

		if(recordName.trim() === " " || recordDescription.trim() === " " || recordTargetDate.trim() === " "){
			modal.current.open();
			return;
		}

		// validation ...

		onAddProject({
			projectName: recordName,
			description: recordDescription,
			targetDate: recordTargetDate,
		})
	}

	return (
		<>
		<Modal ref={modal}>
			<h2>Invalid</h2>
			<p>Oops ... looks like you forgot to enter a value.</p>
			<p>Please make sure you provide a valid value for every input field.</p>
		</Modal>
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					{/* <button className="px-4 py-1  text-black hover:text-slate-50 rounded-md hover:bg-stone-700 hover:border-none">
						Cancel
					</button> */}
					<Button className="px-2 py-2 rounded-md bg-stone-400  text-stone-900  focus:border-r-2 hover:bg-stone-900  hover:text-stone-100">
						Cancel
					</Button>
				</li>
				<li>
					<Button
						className="px-2 py-2 rounded-md bg-stone-400  text-stone-900  focus:border-r-2 hover:bg-stone-900  hover:text-stone-100"
						onClick={handleSave}
					>
						Save
					</Button>
				</li>
			</menu>
			<div>
				{/* Here the ref keyword can intalize the refernce value if react version >= 19 for older versions it won't work.Instead ref directly used below which is customized one , we need to use the forwardRef from react for that we have to wrap Customized function in forwardRef */}
				<Input type="text" ref={projectName} label="Project Name" />
				<Input ref={description} label="Description" textarea />
				<Input type="date" ref={targetDate} label="Target Date" />
			</div>
		</div>
		</>
	)
}


export default CreateProject
