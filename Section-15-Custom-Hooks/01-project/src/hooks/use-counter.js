import {useEffect, useState} from "react";

const useCounter = ( forwards = true ) => {

    const [counter, setCounter] = useState(0);

    const increment = forwards ? 1 : -1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + increment);
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;

};

export default useCounter;
