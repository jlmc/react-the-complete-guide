import { useState } from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = name.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = email.trim() !== '' && email.includes('@');;
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    function onNameInputChangeHandler(event) {
        setName(event.target.value)
    }

    function onEmailInputChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onNameInputBlurHandler(event) {
        setEnteredNameTouched(true);
    }

    function onEmailInputBlurHandler(event) {
        setEnteredEmailTouched(true);
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!formIsValid) {
            console.log('form is not valid')
            return;
        }

        setEnteredNameTouched(false)
        setEnteredEmailTouched(false)
        setName('');
        setEmail('');
    }

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputIsInvalid
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

            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Name</label>
                <input type='text' id='email'
                       onChange={onEmailInputChangeHandler}
                       onBlur={onEmailInputBlurHandler}
                       value={email}
                />
                {emailInputIsInvalid && (
                    <p className='error-text'>Email must not be empty and must contain an aT.</p>
                )}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
