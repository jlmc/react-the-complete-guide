import {useState} from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = name.trim().trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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

        if (!enteredNameIsValid) {
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
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
