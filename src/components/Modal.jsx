import { forwardRef, useImperativeHandle, useRef } from "react"

import { createPortal } from "react-dom"

/* 

In the dynamic world of React development, two powerful tools, forwardRef and useImperativeHandle, play a vital role in enhancing communication between parent and child components. These hooks enable direct control over child component instances and provide a clean way to interact with internal functionalities of custom components. 

we'll explore the functionalities and usecases of both forwardRef and useImperativeHandle, unlocking their potential to create more flexible and efficient React applications. Let's dive in and elevate our React development skills.

*/

/* 

createPortal returns a React node that can be included into JSX or returned from a React component. If React encounters it in the render output, it will place the provided children inside the provided domNode.
*/

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef()

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		}
	})

	return createPortal(
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
			{children}
			//form method
			<form method="dialog">
				{/* <button>Close</button> */}
				{/* for dynamic */}
				<button>{buttonCaption}</button>
			</form>
		</dialog>,document.getElementById('modal-root')
	)
})

export default Modal
