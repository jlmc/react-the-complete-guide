import React, {useState} from 'react';
// import SimpleComponent from "../SimpleComponent";
// import ClassComponent from "../ClassComponent";
//import FunctionalComponent from "../FunctionComponent";
import Header from "../Header";
import Container from "../shared/Container";
import Table, {TableHeader} from "../shared/Table";
import Products, {Product} from "../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "../Products/ProductForm";

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

    const [products, setProducts] = useState(Products);

    const handleProductFormSubmit = (productCreator: ProductCreator) => {
        let product: Product = {
            id: products.length + 1,
            ...productCreator
        }
        setProducts([...products, product])
    }

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>

                <Table
                    headers={headers}
                    data={products}
                />

               <ProductForm onSubmit={handleProductFormSubmit}/>
            </Container>
        </div>
    );
}

export default App;
