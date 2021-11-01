import React from 'react';
// import SimpleComponent from "../SimpleComponent";
// import ClassComponent from "../ClassComponent";
import FunctionalComponent from "../FunctionComponent";
import Header from "../Header";
import Button from "../Button";

function TestComponent () {
    return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
    return (
        <div>
            <Header title="x-stocks"/>

            <Button content="OK"
                    appendIcon={<TestComponent />}
                    onClick={() => window.alert('Hello')}>
                Ok
            </Button>
        </div>
    );
}

export default App;
