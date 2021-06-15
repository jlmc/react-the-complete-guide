import React from "react";


// React.FC - Functional Component
//const Todos: React.FC = (props: React.PropsWithChildren<{}>) => {
const Todos: React.FC<{items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => {
                return <li key={item}>{item}</li>
            })}
         </ul>);
}

export default Todos;
