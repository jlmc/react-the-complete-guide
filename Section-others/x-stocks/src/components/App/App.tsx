import React from 'react';
import Header from "../Header";
import Container from "../shared/Container";
import {TableHeader} from "../shared/Table";
import {Product} from "../../model/Product";
import ProductsCRUD from "../Products/ProductsCRUD";

// function TestComponent() {
//     return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
// }

const headers: TableHeader[] = [
    {key: '_id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Available Stock', right: true}
]

const newEmptyProduct = (): Product => ({
    _id: undefined,
    name: '',
    price: 1.0,
    stock: 0,
    createAt: undefined,
    updatedAt: undefined
});

function App() {

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>
                <ProductsCRUD/>
            </Container>
        </div>
    );
}

export default App;
