import React, { forwardRef } from "react"

// using forwardRef we wrap the function with extra parameter ref we can send the info to textarea and input

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
	const classes =
		"w-full p-1 bg-stone-200 focus:outline-none focus:border-b-2  text-stone-700"
	return (
		<div>
			<p className="flex flex-col gap-1 my-4">
				<label className="text-sm uppercase font-bold text-stone-800">
					{label}
				</label>
				{textarea ? (
					<textarea ref={ref} className={classes} {...props} />
				) : (
					<input ref={ref} className={classes} {...props} />
				)}
			</p>
		</div>
	)
})

export default Input;
