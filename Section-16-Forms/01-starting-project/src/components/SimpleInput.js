import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const nameInputRef = useRef();

    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);


    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('Name Input is valid!');
        }
    }, [enteredNameIsValid]);


    function onNameInputChangeHandler(event) {
        setName(event.target.value)
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();

        setEnteredNameTouched(true);

        // from state
        console.log(`===> ${name}`)

        // from reference
        const value = nameInputRef.current.value;
        console.log(`###> ${value}`);


        if (name.trim() === '') {
            setEnteredNameIsValid(false)
            return;
        }


        // if every thing is fine then we can clean the form

        setEnteredNameIsValid(true)
        setName('');
    }

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'
                       onChange={onNameInputChangeHandler}
                       ref={nameInputRef}
                       value={name}
                />
                {nameInputIsInvalid && (
                    <p className='error-text'>Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
