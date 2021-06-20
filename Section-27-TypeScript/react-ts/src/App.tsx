import React, {useEffect, useState} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo, {todoOf} from "./models/Todo";
import NewTodo from "./components/NewTodo";


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        console.log("---> " + todoText)
        const newTodo = todoOf(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    useEffect(() => {
        const initialTodos = [
            todoOf("Learn React"),
            todoOf("Learn Type Script")];

        setTodos((prevState) => initialTodos);
    }, [])

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(td => td.id !== todoId);
        })
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
        </div>
    );
}

export default App;
