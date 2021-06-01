import {Fragment, useRef, useState} from 'react';
import {Prompt} from 'react-router-dom';

import classes from './QuoteForm.module.css';
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();
    const [formIsActive, setFormIsActive] = useState(false);

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({author: enteredAuthor, text: enteredText});
    }

    function onFocusHandler(event) {
      setFormIsActive(true)
    }

    function beforeSubmitForm(event) {
      setFormIsActive(false)
    }


    return (
        <Fragment>

            <Prompt when={formIsActive}
                    message={location => 'Are you sure you want to leave? All your date will be lost!' }></Prompt>

            <Card>
                <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner/>
                        </div>
                    )}


                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}></textarea>
                    </div>

                    <div className={classes.actions} onClick={beforeSubmitForm}>
                        <button className='btn'>Add Quote</button>
                    </div>


                </form>
            </Card>
        </Fragment>
    );
};

export default QuoteForm;
