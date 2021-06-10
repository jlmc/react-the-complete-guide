import {useEffect, useState} from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    //const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = name.trim().trim() !== '';
    const enteredAgeIsValid = true;
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    let formIsValid = false;

    if (enteredNameIsValid && enteredAgeIsValid) {
        formIsValid = true;
    }


    /*
    useEffect(() => {
        // this can be some HTTP validation
        if (enteredNameIsValid) {
            console.log('Name Input is valid!');
        }
    }, [enteredNameIsValid]);
     */

    function onNameInputChangeHandler(event) {
        setName(event.target.value)
        // using the input value and not the state value because the state could not updated yet
        //if (event.target.value.trim() !== '') {
        //    setEnteredNameIsValid(true);
        //}
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!formIsValid) {
            console.log('form is not valid')
            return;
        }

        setEnteredNameTouched(false)
        setName('');
    }

    function onNameInputBlurHandler(event) {
        setEnteredNameTouched(true);
    }

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'
                       onChange={onNameInputChangeHandler}
                       onBlur={onNameInputBlurHandler}
                       value={name}
                />
                {nameInputIsInvalid && (
                    <p className='error-text'>Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
