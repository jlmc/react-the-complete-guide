import React from "react";
import './Form.scss'

interface FormProps {
    title?: string,
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = (props) => {
    
    const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSubmit && props.onSubmit(event)
    }
    
    return <React.Fragment>
        <form className="Form" onSubmit={preventedSubmit}>
            {
                props.title && <div className="Title">{props.title}</div>
            }
            {props.children}
        </form>
    </React.Fragment>
}

export default Form
