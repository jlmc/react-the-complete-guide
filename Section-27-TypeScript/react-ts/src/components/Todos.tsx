import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";


// React.FC - Functional Component
//const Todos: React.FC = (props: React.PropsWithChildren<{}>) => {
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => {
                return <TodoItem key={item.id} text={item.text}/>
            })}
         </ul>);
}

export default Todos;
