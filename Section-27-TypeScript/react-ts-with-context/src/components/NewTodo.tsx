import React, {useContext, useRef} from "react";
import classes from './NewTodo.module.css';
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const todosContextObj = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        //props.onAddTodo(enteredText.trim())

        todosContextObj.addTodo(enteredText.trim())

        todoTextInputRef.current!.value = ""
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
