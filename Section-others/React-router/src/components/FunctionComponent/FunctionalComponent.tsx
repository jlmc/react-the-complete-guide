import React, {useEffect, useState} from "react";

const FunctionalComponent = (props: { name: string }) => {
    const [age, setAge] = useState<number>(21);

    const onIncrementClicked = () => {
        setAge(age + 1)
    }

    // use effect life cycle

    useEffect(() => {
        console.log("component created: constructor 🤔 !!!")
    }, [])

    console.log("On every render")

    useEffect(() => {
        console.log("on the first render or on Age change 🤔 !!!")
    }, [age])

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
