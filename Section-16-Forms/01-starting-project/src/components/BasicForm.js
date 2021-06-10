import useInput from "../hooks/user-input";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

const BasicForm = (props) => {

    const {
        value: firstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: onFirstNameInputChangeHandler,
        inputBlurHandler: onFirstNameInputBlurHandler,
        reset: resetFirstNameInput
    } = useInput((v) => {
        return v.trim() !== '';
    });

    const {
        value: lastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: onLastNameInputChangeHandler,
        inputBlurHandler: onLastNameInputBlurHandler,
        reset: resetLastNameInput
    } = useInput((v) => {
        return v.trim() !== '';
    });

    const {
        value: email,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: onEmailInputChangeHandler,
        inputBlurHandler: onEmailInputBlurHandler,
        reset: resetEmailInput
    } = useInput((v) => {
        return v.trim() !== '' && EMAIL_REGEX.test(v);
    });


    let formIsValid = (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid);

    function onFormSubmitHandler(event) {
        event.preventDefault();
        if (!formIsValid) {
            console.log("form not valid... ")

            return;
        }

        console.log("Submitting... ")

        resetFirstNameInput('');
        resetLastNameInput('');
        resetEmailInput('');
    }


    const firstNameInputClasses = firstNameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const lastNameInputClasses = lastNameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' value={firstName}
                           onBlur={onFirstNameInputBlurHandler}
                           onChange={onFirstNameInputChangeHandler}/>
                    {firstNameInputHasError && (
                        <p className='error-text'>First Name must not be empty.</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName'
                           value={lastName}
                           onBlur={onLastNameInputBlurHandler}
                           onChange={onLastNameInputChangeHandler}
                    />
                    {lastNameInputHasError && (
                        <p className='error-text'>Last Name must not be empty.</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text'
                       id='email'
                       value={email}
                       onBlur={onEmailInputBlurHandler}
                       onChange={onEmailInputChangeHandler}
                />
                {emailInputHasError && (
                    <p className='error-text'>Email must not be empty and be a valid email.</p>
                )}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
