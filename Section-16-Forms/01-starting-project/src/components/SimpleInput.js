import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const nameInputRef = useRef();


    function onNameInputChangeHandler(event) {
        setName(event.target.value)
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();

        // from state
        console.log(`===> ${name}`)

        // from reference
        const value = nameInputRef.current.value;
        console.log(`###> ${value}`);


        // if every thing is fine then we can clean the form
        setName('');
    }

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'
                       onChange={onNameInputChangeHandler}
                       ref={nameInputRef}
                       value={name}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
