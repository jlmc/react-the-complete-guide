import React from 'react';
// import SimpleComponent from "../SimpleComponent";
// import ClassComponent from "../ClassComponent";
//import FunctionalComponent from "../FunctionComponent";
import Header from "../Header";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Input from "../shared/Input";
import Table, {TableHeader} from "../shared/Table";
import Products from "../shared/Table/Table.mockdata";
import Form from "../shared/Form";

// function TestComponent() {
//     return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
// }

const headers: TableHeader[] = [
    {key: 'id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Available Stock', right: true}
]

function App() {
    //const [street, setStreet] = useState('')

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>

                <Table
                    headers={headers}
                    data={Products}
                />

                <Form title="Product details">
                    <Input label="Name"  placeholder="Cookie"/>
                    <Input label="Price" type="number" step="0.01" placeholder="99.12"/>
                    <Input label="Stock" type="number" min="0" step="0.01" placeholder="0"/>
                    <Button>Save</Button>
                </Form>
            </Container>
        </div>
    );
}

export default App;
