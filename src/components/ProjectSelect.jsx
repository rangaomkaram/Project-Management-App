import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

const ProjectSelect = ({onStartAddProject}) => {
  return (
    <div className='mt-24 w-2/3 text-center'>
        <img src={noProjectImage} alt="An Empty list"  className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected or found</h2>
        <p className='text-stone-400 mb-4'>Please Select Project or Start your new Project</p>
        <p className='mt-8'>
        <Button onClick = {onStartAddProject}>
          Create New Project
        </Button>
        </p>
    </div>
  )
}

export default ProjectSelect;