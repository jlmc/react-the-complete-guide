import React, {useState} from 'react';
// import SimpleComponent from "../SimpleComponent";
// import ClassComponent from "../ClassComponent";
//import FunctionalComponent from "../FunctionComponent";
import Header from "../Header";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Input from "../shared/Input";

function TestComponent() {
    return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
}

function App() {
    const [street, setStreet] = useState('')

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>

                <Input label="Street"
                       placeholder="5 Cesamo Street"
                       value={street}
                       onChange={e => setStreet(e.target.value)}/>

                <Button content="OK"
                        appendIcon={<TestComponent/>}
                        onClick={() => window.alert('Hello')}>
                    Ok
                </Button>
            </Container>
        </div>
    );
}

export default App;
