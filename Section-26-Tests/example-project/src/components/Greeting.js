import {useState} from "react";

const Greeting = (props) => {

    const [changedText, setChangedText] = useState(false)

    function changeTextHandler() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <p>good to see you!</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
};

export default Greeting;
