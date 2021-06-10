import useInput from "../hooks/user-input";

const SimpleInput = (props) => {
    const {
        value: name,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: onNameInputChangeHandler,
        inputBlurHandler: onNameInputBlurHandler,
        reset: resetNameInput
    }
     = useInput((value) => value.trim() !== '' )

    const {
        value: email,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: onEmailInputChangeHandler,
        inputBlurHandler: onEmailInputBlurHandler,
        reset: resetEmailInput
    }
    = useInput((v) => {
        return v.trim() !== '' && v.includes('@');
    })


    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            console.log('form is not valid')
            return;
        }

        resetNameInput('');
        resetEmailInput('')
    }

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputHasError
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
                {nameInputHasError && (
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
                {emailInputHasError && (
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
