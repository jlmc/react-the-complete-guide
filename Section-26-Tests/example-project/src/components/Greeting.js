import {useState} from "react";
import Output from "./Output";

const Greeting = (props) => {

    const [changedText, setChangedText] = useState(false)

    function changeTextHandler() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <Output>good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
};

export default Greeting;
