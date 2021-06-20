import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'
import {TodosContext} from "../store/todos-context";


// React.FC - Functional Component
//const Todos: React.FC = (props: React.PropsWithChildren<{}>) => {
const Todos: React.FC = () => {

    const todosContextObj = useContext(TodosContext);

    return (
        <ul className={styles.todos}>
            {todosContextObj.items.map(item => {
                return <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosContextObj.removeTodo.bind(null, item.id)}
                />
            })}
         </ul>);
}

export default Todos;
