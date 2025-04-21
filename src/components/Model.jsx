import React from 'react'

import { createPortal } from 'react-dom';


/* 
In the dynamic world of React development, two powerful tools, forwardRef and useImperativeHandle, play a vital role in enhancing communication between parent and child components. These hooks enable direct control over child component instances and provide a clean way to interact with internal functionalities of custom components. In this blog, we'll explore the functionalities and usecases of both forwardRef and useImperativeHandle, unlocking their potential to create more flexible and efficient React applications. Let's dive in and elevate our React development skills.
*/

/* 
createPortal returns a React node that can be included into JSX or returned from a React component. If React encounters it in the render output, it will place the provided children inside the provided domNode.
*/

const Model = ({children}) => {
  return createPortal(
    <dialog>
        {children}
    </dialog>,
    document.getElementById('modal-root')
  )
}

export default Model
