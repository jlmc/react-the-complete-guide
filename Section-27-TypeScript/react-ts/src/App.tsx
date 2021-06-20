import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";



function App() {

    const todos = [

        new Todo('' + Math.random(), "Learn React"),
        new Todo('' + Math.random(), "Learn Type Script"),
    ];

    const addTodoHandler = (todoText: string) => {
        console.log("---> " + todoText)
    };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
