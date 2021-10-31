import React, {useState} from "react";

const FunctionalComponent = (props: { name: string }) => {
    const [age, setAge] = useState<number>(21);

    const onIncrementClicked = () => {
        setAge(age + 1)
    }

    return (
        <>
            <div>
                Function component: {props.name} have {age}
            </div>
            <div>
                <button onClick={onIncrementClicked}>increment</button>
            </div>
        </>
    )
}

export default FunctionalComponent
