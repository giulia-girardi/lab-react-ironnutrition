import { useState } from 'react'

const Toggle = ({children}) => {
    const [show, setShow] = useState()
    
    const toggleShow = () => {
        setShow(!show)
    }

    let buttonText = show ? "Hide form" : "Show form"

    return (
        <div>
            {show && children}
            <button type="primary" onClick={toggleShow}>{buttonText}</button>
        </div>
    )
}

export default Toggle;