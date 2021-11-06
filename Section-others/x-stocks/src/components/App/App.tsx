import Swal from 'sweetalert2'

import React, {useEffect, useState} from 'react';
// import SimpleComponent from "../SimpleComponent";
// import ClassComponent from "../ClassComponent";
//import FunctionalComponent from "../FunctionComponent";
import Header from "../Header";
import Container from "../shared/Container";
import Table, {TableHeader} from "../shared/Table";
import Products, {Product} from "../shared/Table/Table.mockdata";
import ProductForm from "../Products/ProductForm";
import {getAllProducts} from "../../service/Products.service";

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

    const [products, setProducts] = useState<Product[]>([]);
    //const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

    // only on the creation
    useEffect(() => {
       async function fetchData() {
           const _products = await getAllProducts()
           setProducts(_products)
       }
       fetchData()
    }, [])


    const handleFormProductUpdate = (otherProduct: Product) => {
        const products1: Product[] = products.map(product => product.id === otherProduct.id ? otherProduct : product);
        setProducts(products1)
    }

    /**
     * on form add action handle
     */
    const handleFormProductAdd = (otherProduct: Product) => {
        const newId: number = products.length + 1

        let product: Product = {
            id: newId,
            ...otherProduct
        }

        setProducts([...products, product])

        setUpdatingProduct(undefined)
    }

    /**
     * on table edit handle
     */
    const handleEditSelect = (product: Product) => {
        setUpdatingProduct(product)
    }

    /**
     * on table delete handle
     */
    const handleDeleteClick = (product: Product) => {
        Swal
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#09f',
                cancelButtonColor: '#d33',
                confirmButtonText: `Yes, delete ${product.name}!`
            })
            .then((result) => {
                if (result.value) {
                    deleteProduct(product.id)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }

    const deleteProduct = (productId?: Number) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )

    }

    const handleFormProductCancel = () => {
        setUpdatingProduct(undefined)
    }

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>
                <Table
                    headers={headers}
                    data={products}
                    enableActions={true}
                    onDelete={handleDeleteClick}
                    onDetail={handleProductDetail}
                    onEdit={handleEditSelect}
                />

               <ProductForm
                   product={updatingProduct}
                   onCancel={handleFormProductCancel}
                   onUpdate={handleFormProductUpdate}
                   onSubmit={handleFormProductAdd}/>
            </Container>
        </div>
    );
}

export default App;
